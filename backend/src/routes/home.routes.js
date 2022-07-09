/**
 * Home routes with Contact us part
 */
const router = require("express").Router();

// import index controller 
// GET all the featured doctor from DB with images section
// contact us using nodemailer controller, bottom section
const homeController = require('../controllers/index.controller');
router.get('/', homeController.getDentist);
router.get('/dentist', homeController.findOneDentist);
router.post('/', homeController.send);

module.exports = router;