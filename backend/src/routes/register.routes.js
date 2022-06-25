// To import Router from Request
var router = require("express").Router();

// import controller register
const registerController = require('../controllers/register.controller');


// registration form
router.post("/", registerController.register);



// Route for checking if the account already exist

module.exports = router;