/**
 * Home routes with Contact us part
 */
const router = require("express").Router();

// import index controller 
// GET all the featured doctor from DB with images section
// contact us using nodemailer controller, bottom section
const homeController = require('../controllers/home/index.controller');
router.get('/', homeController.getAllDentist);
// router.post('/', homeController.send);



module.exports = router;