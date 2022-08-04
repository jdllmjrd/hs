
/**
 * 
 * CONTROLLER SCHEDULE
 */
 const db = require('../../models');
 const Schedule= db.Dentists_schedules;
 const Users= db.Users;
 const { dataResponse, checkAuthorization, emptyDataResponse, errResponse } = require('../../helpers/helper.controller');
 
 //create Sched
 exports.createSchedule = (req, res) => {
     
     req.body.schedule_created_by = req.user.users_id;
     req.body.schedule_dentist_datetime = "";
     // Check users-type if valid
     checkAuthorization(req, res, "Admin");
        
     // Create featured dentist
     Schedule
         .create(req.body)
         .then((data) => dataResponse(res, data, "Schedule created Successfully", "Schedule not created"))
         .catch((err) => errResponse(res, err)); 
 
 };
 // Update Sched
 exports.updateSchedule = (req, res) => {
     // Check if user-status is valid
     // note: always check authorization using users_type
     checkAuthorization(req, res, "Admin")
     const schedule_id = req.params.schedule_id;
     req.body.schedule_updated_by = req.user.users_id;
      
     featuredDentist.update(req.body, { where: { schedule_id: schedule_id }}, { include: ["updated"] })
     .then((result) => {
       console.log(req.body);
       if (result) {
         // retrieve updated details
         Users.findByPk(data.users_id, { include: ["updated"] }).then((result) => {
           res.send({
             error: false,
             data: result,
             message: [process.env.SUCCESS_UPDATE],
           });
         });
       } else {
         res.status(500).send({
           error: true,
           data: [],
           message: ["Error in updating a record"],
         });
       }
     })
     .catch((err) => {
       res.status(500).send({
         error: true,
         data: [],
         message:
           err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
       });
     });
 };
 // Get all Schedule
 exports.findAllSchedule = (req, res) => {
     
     // Check authorization first
     checkAuthorization(req, res, "Admin")
     Schedule
         .findAll()
         .then(data => dataResponse(res, data, "Schedules Retrieved Successfully", "No featured dentist has been retrieved"))
         .catch(err => errResponse(res, err));
 };
 // Disapprove Schedule
 exports.deleteSchedule = (req, res) => {
   const body = { schedule_status: "Disapproved" };
   const schedule_id = req.params.schedule_id;
   
   // Check authorization first
   checkAuthorization(req, res, "Admin");
 
   Schedule.update(body, {
       where: { schedule_id : schedule_id },
     })
       .then(result => {
           if(result) emptyDataResponse(res, "Schedule successfully disapproved")
       })
       .catch(err => errResponse(res, err)
 )};  