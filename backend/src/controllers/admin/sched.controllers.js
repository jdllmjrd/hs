/**
 * CONTROLLERS FOR SCHEDULE DENTIST
 */
const db = require('../../models');
const Users = db.Users;
const Schedule = db.Dentists_schedules;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');

// Get all Sched
exports.findAllSchedule= (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, 'Admin')

    Schedule
        .findAll()
        .then(data => dataResponse(res, data, "Schedules are retrieved successfully", "No Schedule Available"))
        .catch(err => errResponse(res, err));
}
// Create Schedule for dentist
exports.createSchedule = (req, res) => {
    checkAuthorization(req, res, "Admin")
 
    req.body.sched_dentist = req.user.users_id;
    Schedule.create(req.body, { include: ["created", "sched_dentist", "sched_branch"] })
        .then((data) => {
          Schedule.findByPk(data.id, { include: ["created","sched_dentist", "sched_branch"], }).then(
            (result) => {
            res.send({
                error: false,
                data: result,
                message: [process.env.SUCCESS_CREATE],
            });
            }
        );
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};
// Delete Sched
exports.deleteSchedule = (req, res) => {
    const body = { users_status: "Inactive" };
    const users_id = req.params.users_id;
    
    // Check authorization first
    checkAuthorization(req, res, "Admin");

    Users.update(body, {
        where: { users_id: users_id },
      })
        .then(result => {
            if(result) emptyDataResponse(res, "User record is successfully deactivated")
        })
        .catch(err => errResponse(res, err));
};
// updateAccount
exports.updateSchedule = async (req, res) => {

    // Check authorization first
   checkAuthorization(req, res, "Admin");
    const users_id = req.params.users_id;
    req.body.users_full_name = "";
    req.body.users_updated_by = req.user.users_id;
  
  
    Users.update(req.body, { where: { users_id: users_id }}, { include: ["updated"] })
      .then((result) => {
        console.log(req.body);
        if (result) {
          // retrieve updated details
          Users.findByPk(users_id, { include: ["updated"] }).then((result) => {
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
        res.status(500).send(err);
      });
};
