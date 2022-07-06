
/**
* Dentist Schedule Routes
*/
// To import Router from Request
var router = require("express").Router();

/** Schedules of Schedules */

const scheduleController = require("../controllers/dentist/schedule.controller");
router.put("/schedule/:schedule_id", scheduleController.updateSchedule); // update
router.get("/schedule/get-schedule", scheduleController.findAllSchedule);
router.delete("/schedule/:schedule_id", scheduleController.deleteSchedule); // Destroy

module.exports = router;