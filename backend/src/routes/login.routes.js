const router = require("express").Router();

// import controller user
const loginController = require('../controllers/login.controller');
router.post('/log', loginController.login);



module.exports = router;