
 const router = require("express").Router();


 // GET all the Branch from DB
 const branchesController = require('../controllers/branches.controller');
 router.get('/branches', branchesController.getAllBranches);


 // GET all the Dentist from DB
 const DentistController = require('../controllers/getAllDentist.controller');
 router.get('/dentist', DentistController.getAllDentist);


  // GET all the Dentist from DB
  const schedController = require('../controllers/geAllSchedule.controller');
  router.get('/schedule', schedController.findAllSchedule);


 module.exports = router;