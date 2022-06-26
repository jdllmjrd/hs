//This is the route for invoices
var router = require('express').Router();

const invoicesController = require("../controllers/invoices.controller");

router.post("/", invoicesController.create);
router.put("/", invoicesController.update);
router.get("/:id", invoicesController.findOne);

module.exports = router;