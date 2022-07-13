const router = require("express").Router();

// import service controller
const servicesController = require('../controllers/service.controller');
router.get('/', servicesController.getServices);
router.get('/:services_id', servicesController.getServices);

router.get('/', servicesController.send);

module.exports = router;