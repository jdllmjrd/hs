
/**
 * 
 * CONTROLLER SCHEDULE
 */
 const db = require('../../models');
 const Schedule= db.Dentists_schedules;
 const Users= db.Users;
 const { dataResponse, checkAuthorization, emptyDataResponse, errResponse } = require('../../helpers/helper.controller');
 

 // Get all Schedule
 exports.findAllSchedule = (req, res, next) => {
     // Check authorization first
     checkAuthorization(req, res, 'Dentist')
     const dentist_id = req.user.users_id;
     Schedule
         .findAll({
            where: {schedule_dentist : dentist_id},
            include: "created",
         })
         .then(data => dataResponse(res, data, "Schedules Retrieved Successfully", "No Schedule available"))
         .catch(err => errResponse(res, err));
 };
 // Disapprove Schedule
 exports.deleteSchedule = (req, res) => {
   const body = { schedule_status: "Disapproved" };
   const schedule_id = req.params.schedule_id;
   
   // Check authorization first
   checkAuthorization(req, res, "Dentist");
 
   Schedule.update(body, {
       where: { schedule_id : schedule_id },
     })
       .then(result => {
           if(result) emptyDataResponse(res, "Schedule successfully disapproved")
       })
       .catch(err => errResponse(res, err)
 )};  

 exports.updateSchedule = (req, res) => {
  const body = { schedule_status: "Disapproved" };
  const schedule_id = req.params.schedule_id;
  
  // Check authorization first
  checkAuthorization(req, res, "Dentist");

  Schedule.update(body, {
      where: { schedule_id : schedule_id },
      include: "sched_updated"
    })
      .then(result => {
          if(result) emptyDataResponse(res, "Schedule successfully disapproved")
      })
      .catch(err => errResponse(res, err)
)};  