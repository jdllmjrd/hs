var router = require("express").Router();
const multer = require("multer");
const path = require("path");
const helpers = require("../helpers/image.helper");

// This part is for image users profile picture
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/users_profile_pic"));
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImage = (req, res, next) => {
  let upload = multer({
    storage: storage,
    fileFilter: helpers.imageFilter,
  }).single("users_profile_pic");

  upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.status(500).send({
        error: true,
        data: [],
        message: [req.fileValidationError],
      });
    } else if (!req.file) {
      return res.status(500).send({
        error: true,
        data: [],
        message: ["Please select an image to upload"],
      });
    } else if (err instanceof multer.MulterError) {
      return res.status(500).send({
        error: true,
        data: [],
        message: [err],
      });
    } else if (err) {
      return res.status(500).send({
        error: true,
        data: [],
        message: [err],
      });
    }
    next();
  });
};

const staffInfoController = require("../controllers/staff/staff_info.controller");
router.get("/profile/get-info", staffInfoController.getStaffInfo);
router.put("/profile/:users_id", uploadImage, staffInfoController.updateStaffInfo);


//import invoices controller
const invoicesController = require("../controllers/staff/invoices.controller");

router.post("/invoice", invoicesController.create); //insert
router.put("/invoice/:invoice_id", invoicesController.updateInvoice); //update
router.get("/invoice", invoicesController.findInvoice); //find specific id

const scheduleController = require("../controllers/staff/shedule.controller");
router.post("/schedule", scheduleController.createSchedule);
router.put("/schedule/:schedule_id", scheduleController.updateSchedule);
router.get("/schedule", scheduleController.findAllSchedule);
router.delete("/schedule/:schedule_id", scheduleController.deleteSchedule);

const appointmentController = require("../controllers/staff/appointment.controller");
router.post("/appointment", appointmentController.createAppointment);
router.get("/appointment", appointmentController.findAllAppointment);
router.put(
  "/appointment/:appointments_id",
  appointmentController.updateAppointment
);
router.delete(
  "/appointment/:appointments_id",
  appointmentController.deleteAppointment
);

module.exports = router;
