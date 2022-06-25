const router = require("express").Router();

// import controller user
const loginController = require('../controllers/login.controller');
router.post('/', loginController.login);



module.exports = router;