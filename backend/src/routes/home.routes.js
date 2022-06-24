/**
 * Home routes with Contact us part
 */
const router = require("express").Router();

// import index controller 
// GET all the featured doctor from DB with images section
// contact us using nodemailer controller, bottom section
const homeController = require('../controllers/home/index.controller');
router.get('/', homeController.render);

// Featured Dentist section but still in the home page part
const dentistsController = require('../controllers/home/index.controller');
router.get('/', dentistsController.getAllDentist);

// For contact us, Test this one after connection of frontend
const contactUsController = require('../controllers/home/index.controller');
router.post('/', contactUsController.send);



module.exports = router;