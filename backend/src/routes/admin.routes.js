/**
* Admin Routes
*/
// To import Router from Request
var router = require("express").Router();


// For Dashboard
// Counter
const adminInfoController = require("../controllers/admin/admin_info.controller");
router.get('/info' , adminInfoController.getAdminInfo);
router.put('/info' , adminInfoController.updateAdminInfo); 
router.put('/admin-update-password' , adminInfoController.updateAdminPassword);

/** For Registered Users CRUD */ 
 const usersController = require("../controllers/admin/users.controller");

router.post("/add-users", usersController.createAccount); // insert
router.put("/:users_id", usersController.updateAccount); // update
router.get("/retrieve-users", usersController.getAllAccounts);
router.delete("/:users_id", usersController.deleteAccount); // deactivate user

/** For Featured Dentist CRUD */ 
const dentistController = require("../controllers/admin/dentists.controller");

router.post("/add-featured-dentist", dentistController.createDentist); // insert
router.put("/:dentist_id", dentistController.updateDentist); // update
router.get("/retrieved-featured-dentist", dentistController.getAll);
router.delete("/:dentist_id", dentistController.deleteDentist);

/** For Services CRUD */ 
const serviceController = require("../controllers/admin/services.controller");
router.post("/add-service", serviceController.createService); // insert
router.put("/:service_id", serviceController.updateService); // update
router.get("/get-all-services", serviceController.getAllService);
router.delete("/:service_id", serviceController.deleteService); // destroy

// /** Appointments LISTS */
// const appointmentController = require("../controllers/admin/appointments.controller");
// router.post("/add-appointment", appointmentController.createAppointment); // insert
// router.put("/:appointment_id", appointmentController.updateAppointment); // update // Can approve appoin
// router.get("/get-all-appointment", appointmentController.findAllAppointment);
// router.delete("/:appointment_id", appointmentController.deleteAppointment); // deactivate appointment

/** Schedules of Dentists */
// router.post("/appointment", scheduleController.createAppointment); // insert
// router.put("/:schedule_id", scheduleController.updateAppointment); // update
// router.get("/get-all-appointment", scheduleController.findAllAppointment);
// router.delete("/:schedule_id", scheduleController.deleteAppointment); // delete as in delete

module.exports = router;