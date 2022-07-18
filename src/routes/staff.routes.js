var router = require("express").Router();

//import invoices controller
//const invoicesController = require("../controllers/invoices.controller");

//router.post("/", invoicesController.create); //insert
//router.put("/", invoicesController.update); //update
//router.get("/invoices_id", invoicesController.findOne); //find specific

//import invoices controller
const invoicesController = require("../controllers/staff/invoices.controller");

router.post("/invoice", invoicesController.create); //insert
router.put("/invoice/:invoice_id", invoicesController.updateInvoice); //update
router.get("/invoice", invoicesController.findInvoice); //find specific id

const scheduleController = require("../controllers/staff/shedule.controller");
router.post("/schedule", scheduleController.createSchedule);
router.put("/schedule/:schedule_id", scheduleController.updateSchedule);
router.get("/schedule", scheduleController.findAllSchedule);
router.delete("/schedule/:schedule_id", scheduleController.deleteSchedule);

const appointmentController = require("../controllers/staff/appointment.controller");
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
