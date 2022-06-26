//This is the route for invoices
var router = require('express').Router();

const invoiceServicesController = require("../controllers/invoices_services.controller");

router.post("/", invoiceServicesController.create); //create
router.get("/inser_id", invoiceServicesController.findOne); //find specific id


module.exports = router;