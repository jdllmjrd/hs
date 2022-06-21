var router = require("express").Router();

// import controller user
const loginController = require('../controllers/login.controller');
router.post('/login', loginController.login);



module.exports = router;