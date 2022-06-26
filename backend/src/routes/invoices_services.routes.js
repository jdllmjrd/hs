//This is the route for invoices
var router = require('express').Router();

const invoiceServicesController = require("../controllers/invoices_services.controller");

router.post("/", invoiceServicesController.create);
router.get("/", invoiceServicesController.findOne);


module.exports = router;