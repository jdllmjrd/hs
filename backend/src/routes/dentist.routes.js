
/**
* Dentist Schedule Routes
*/
// To import Router from Request
var router = require("express").Router();

/** Schedules of Schedules */
router.post("/", scheduleController.createSchedule); // insert
router.put("/:schedule_id", scheduleController.updateSchedule); // update
router.get("/", scheduleController.findAllSchedule);
router.delete("/:schedule_id", scheduleController.deleteSchedule); // Destroy

/** Schedules of Appointments */
router.post("/", appointmentsController.createAppointments); // insert
router.put("/:appointments_id", appointmentsController.updateAppointments); // update
router.get("/", scheduleController.findAllAppointments);
router.delete("/:appointments_id", scheduleController.deleteAppointments); // Destroy

module.exports = router;