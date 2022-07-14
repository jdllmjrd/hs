/**
 * Admin Routes
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
// This part is for Featured Dentists
const storageDentist = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/featured_dentist"));
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadDentist = (req, res, next) => {
  let upload = multer({
    storage: storageDentist,
    fileFilter: helpers.imageFilter,
  }).single("dentists_image");

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

// This part is for features dentist
const storageService = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/services"));
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImageService = (req, res, next) => {
  let upload = multer({
    storage: storageService,
    fileFilter: helpers.imageFilter,
  }).single("services_image");

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

// For Dashboard
// // Counter
const adminInfoController = require("../controllers/admin/admin_info.controller");
router.get("/profile/get-info", adminInfoController.getAdminInfo);
router.put("/profile/:users_id", adminInfoController.updateAdminInfo);

/** For Registered Users CRUD */
const usersController = require("../controllers/admin/users.controller");

router.post("/user/add-users", uploadImage, usersController.createAccount); // insert
router.put("/user/:users_id", uploadImage, usersController.updateAccount); // update
router.get("/user/retrieve-users", usersController.getAllAccounts);
router.delete("/user/:users_id", usersController.deleteAccount); // deactivate user

// /** For Featured Dentist CRUD */
const dentistController = require("../controllers/admin/dentists.controller");

router.post(
  "/dentist/add-featured-dentist",
  uploadDentist,
  dentistController.createDentist
); // insert
router.put(
  "/dentist/:dentists_id",
  uploadDentist,
  dentistController.updateDentist
); // update
router.get("/dentist/retrieved-featured-dentist", dentistController.getAll);
router.delete("/dentist/:dentists_id", dentistController.deleteDentist);

/** For Services CRUD */
const serviceController = require("../controllers/admin/services.controller");
router.post(
  "/service/add-service",
  uploadImageService,
  serviceController.createService
); // insert
router.put(
  "/service/:services_id",
  uploadImageService,
  serviceController.updateService
); // update
router.get("/service/get-all-services", serviceController.getAllService);
router.delete("/service/:services_id", serviceController.deleteService); // destroy

/** For Branches CRUD */
const branchesController = require("../controllers/admin/branches_controller");
router.post("/branch/add-branch", branchesController.createBranches); // insert
router.put("/branch/:branches_id", branchesController.updateBranches); // update
router.get("/branch/get-all-branches", branchesController.getAllBranches);
router.delete("/branch/:branches_id", branchesController.deleteBranch); // destroy

// /** Appointments LISTS */
const appointmentController = require("../controllers/admin/appointments.controller");
router.post(
  "/appointment/add-appointment",
  appointmentController.createAppointment
); // insert
router.put(
  "/appointment/:appointments_id",
  appointmentController.updateAppointment
); // update // Can approve appointment
router.get(
  "/appointment/get-all-appointment",
  appointmentController.findAllAppointment
);
router.delete(
  "/appointment/:appointments_id",
  appointmentController.deleteAppointment
); // Cancel appointment

/** Schedules of Dentists */
const scheduleController = require("../controllers/admin/sched.controllers");
router.post("/schedule/add-schedule", scheduleController.createSchedule); // insert
router.put("/schedule/:schedule_id", scheduleController.updateSchedule); // update
router.get("/schedule/get-all-schedule", scheduleController.findAllSchedule);
router.delete("/schedule/:schedule_id", scheduleController.deleteSchedule); // delete as in delete

/** For Invoice CRUD */
const invvoicesController = require("../controllers/admin/invoices.controller");
router.post("/invoices/add-invoice", invvoicesController.createInvoice);
router.put("/invoices/:invoice_id", invvoicesController.updateInvoice);
router.get("/invoices/get-invoice", invvoicesController.findInvoice);
router.delete("/invoices/:invoice_id", invvoicesController.deleteInvoice);

module.exports = router;
