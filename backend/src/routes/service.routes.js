const router = require("express").Router();

// import service controller
const servicesController = require('../controllers/service.controller');
router.get('/', servicesController.getServices);
router.get('/service', servicesController.getOneService);

module.exports = router;