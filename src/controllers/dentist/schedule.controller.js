/**
 *
 * CONTROLLER SCHEDULE
 */
const db = require("../../models");
const Schedule = db.Dentists_schedules;
const Users = db.Users;
const {
  dataResponse,
  checkAuthorization,
  emptyDataResponse,
  errResponse,
} = require("../../helpers/helper.controller");

// Get all Schedule
exports.findAllSchedule = (req, res, next) => {
  // Check authorization first
  checkAuthorization(req, res, "Dentist");
  const dentist_id = req.user.users_id;
  Schedule.findAll({
    where: { schedule_dentist: dentist_id },
    include: "created",
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
// Disapprove Schedule
exports.deleteSchedule = (req, res) => {
  const body = { schedule_status: "Disapproved" };
  const schedule_id = req.params.schedule_id;

  // Check authorization first
  checkAuthorization(req, res, "Dentist");

  Schedule.update(body, {
    where: { schedule_id: schedule_id },
  })
    .then((result) => {
      if (result) emptyDataResponse(res, "Schedule successfully disapproved");
    })
    .catch((err) => errResponse(res, err));
};

// exports.updateSchedule = (req, res) => {
//   const body = { schedule_status: "Disapproved" };
//   const schedule_id = req.params.schedule_id;

//   // Check authorization first
//   checkAuthorization(req, res, "Dentist");

//   Schedule.update(body, {
//     where: { schedule_id: schedule_id },
//     include: "sched_updated",
//   })
//     .then((result) => {
//       if (result) emptyDataResponse(res, "Schedule successfully disapproved");
//     })
//     .catch((err) => errResponse(res, err));
// };

// Update Sched
exports.updateSchedule = async (req, res) => {
  try {
    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Dentist");
    const { schedule_id } = req.params;
    const { users_id } = req.user;

    await Schedule.update(
      {
        ...req.body,
        schedule_updated_by: users_id,
      },
      { where: { schedule_id: schedule_id } },
      { include: ["updated"] }
    );

    const sched = await Schedule.findByPk(schedule_id);

    return res.send({
      error: false,
      data: sched,
      message: [process.env.SUCCESS_UPDATE],
    });
  } catch (error) {
    return res.status(500).send({
      error: true,
      data: [],
      message: err || process.env.GENERAL_ERROR_MSG,
    });
  }
};
