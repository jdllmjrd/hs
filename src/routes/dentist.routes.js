/**
 * Dentist Schedule Routes
 */
// To import Router from Request
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


const dentistInfoController = require("../controllers/dentist/dentist_info.controller");
router.get("/profile/get-info", dentistInfoController.getDentistInfo);
router.put("/profile/:users_id", uploadImage, dentistInfoController.updateDentistInfo);

/** Schedules of Schedules */
const scheduleController = require("../controllers/dentist/schedule.controller");
router.put("/schedule/:schedule_id", scheduleController.updateSchedule); // update
router.get("/schedule", scheduleController.findAllSchedule);
router.delete("/schedule/:schedule_id", scheduleController.deleteSchedule); // Destroy

module.exports = router;
