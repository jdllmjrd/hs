var router = require('express').Router();

//import invoices controller
//const invoicesController = require("../controllers/invoices.controller");

//router.post("/", invoicesController.create); //insert
//router.put("/", invoicesController.update); //update
//router.get("/invoices_id", invoicesController.findOne); //find specific 

//import invoices controller
const invoicesController = require("../controllers/invoices.controller");

router.post("/", invoicesController.create); //insert
router.put("/", invoicesController.update); //update
router.get("/invoices_id", invoicesController.findOne); //find specific id

module.exports = router;