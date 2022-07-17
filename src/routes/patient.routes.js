var router = require("express").Router();

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
