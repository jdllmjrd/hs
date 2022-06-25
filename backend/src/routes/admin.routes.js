/**
* Admin Routes
*/
// To import Router from Request
var router = require("express").Router();

// For Dashboard
// Counter

/** For Registered Users CRUD */ 
// router.post("/", usersController.create); // insert
// router.put("/:users_id", usersController.update); // update
// router.get("/", usersController.findAll);
// router.get("/:users_id", usersController.findOne); /'/ find specific id
// router.delete("/:users_id", usersController.delete); // deactivate user

/** For Featured Dentist CRUD */ 
// const dentistController = require("../controllers/dentists.controller");

// router.post("/", dentistController.create); // insert
// router.put("/:dentist_id", dentistController.update); // update
// router.get("/", dentistController.findAll);
// router.get("/:dentist_id", dentistController.findOne);
// router.delete("/:dentist_id", dentistController.delete);

/** For Services CRUD */ 
// router.post("/", serviceController.create); // insert
// router.put("/:service_id", serviceController.update); // update
// router.get("/", serviceController.findAll);
// router.get("/:service_id", serviceController.findOne); /'/ find specific id
// router.delete("/:service_id", serviceController.delete); // deactivate user

/** Appointments LISTS */
// router.post("/", appointmentController.create); // insert
// router.put("/:appointment_id", appointmentController.update); // update
// router.get("/", appointmentController.findAll);
// router.get("/:appointment_id", appointmentController.findOne); /'/ find specific id
// router.delete("/:appointment_id", appointmentController.delete); // deactivate user

/** Schedules of Dentists */
// router.post("/", scheduleController.create); // insert
// router.put("/:schedule_id", scheduleController.update); // update
// router.get("/", scheduleController.findAll);
// router.get("/:schedule_id", scheduleController.findOne); /'/ find specific id
// router.delete("/:schedule_id", scheduleController.delete); // deactivate user

module.exports = router;