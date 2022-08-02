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


const patientInfoController = require("../controllers/patient/patient_info.controller");
router.get("/profile/get-info", patientInfoController.getPatientInfo);
router.put("/profile/:users_id", uploadImage, patientInfoController.updatePatientInfo);

const appointmentController = require("../controllers/patient/appointment.controller");
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
