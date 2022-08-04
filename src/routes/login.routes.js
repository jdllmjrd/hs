const router = require("express").Router();

// import controller user
const loginController = require('../controllers/login.controller');
router.post('/', loginController.login);
router.post('/recoverpw', loginController.recoverpw);
router.post('/changepw', loginController.changepw);

module.exports = router;