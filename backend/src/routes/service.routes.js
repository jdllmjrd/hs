const router = require("express").Router();

// import service controller
const servicesController = require('../controllers/service.controller');
router.get('/', servicesController.getServices);

module.exports = router;