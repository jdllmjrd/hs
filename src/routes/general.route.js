
 const router = require("express").Router();


 // GET all the Branch from DB
 const branchesController = require('../controllers/branches.controller');
 router.get('/branches', branchesController.getAllBranches);


 // GET all the Dentist from DB
 const DentistController = require('../controllers/branches.controller');
 router.get('/featured-dentist', DentistController.getAllDentist);


 module.exports = router;