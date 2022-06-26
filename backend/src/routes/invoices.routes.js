//This is the route for invoices
var router = require('express').Router();

const invoicesController = require("../controllers/invoices.controller");

router.post("/", invoicesController.create); //insert
router.put("/", invoicesController.update); //update
router.get("/invoices_id", invoicesController.findOne); //find specific id

module.exports = router;