// To import Router from Request
var router = require("express").Router();

// import controller register
const registerController = require('../controllers/register.controller');


// registration form
router.post("/", registerController.register);



module.exports = router;