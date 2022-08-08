/**
 *
 * CONTROLLER SCHEDULE
 */
 const db = require("../models");
 const Schedule = db.Dentists_schedules;
 const Users = db.Users;
 const Branches = db.Branches;
 const {
   dataResponse,
   checkAuthorization,
   emptyDataResponse,
   errResponse,
 } = require("../helpers/helper.controller");
 

// Get all Schedule
exports.findAllSchedule = (req, res, next) => {
    Schedule.findAll({
      where: { schedule_status: "Approved" },
      include: [
        {
          model: Users, as: "sched"
        },
        {
          model: Branches, as : "sched_branch"
        },
        {
          model: Users, as : "created"
        },
      ]
    })
      .then((data) =>
        dataResponse(
          res,
          data,
          "Schedules Retrieved Successfully",
          "No Schedule available"
        )
      )
      .catch((err) => errResponse(res, err));
  };