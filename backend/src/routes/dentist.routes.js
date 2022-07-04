
/**
* Dentist Schedule Routes
*/
// To import Router from Request
var router = require("express").Router();

/** Schedules of Schedules */
router.post("/create-schedule", scheduleController.createSchedule); // insert
router.put("/:schedule_id", scheduleController.updateSchedule); // update
router.get("/get-schedule", scheduleController.findAllSchedule);
router.delete("/:schedule_id", scheduleController.deleteSchedule); // Destroy

module.exports = router;