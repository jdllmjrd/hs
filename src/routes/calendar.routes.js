const router = require("express").Router();

const calendarController = require("../controllers/calendar.controller");
router.post("/", calendarController.createEvent);
router.get("/", calendarController.findEvent);
router.put("/:event_id", calendarController.updateEvent);
router.delete("/:event_id", calendarController.deleteEvent);

module.exports = router;
