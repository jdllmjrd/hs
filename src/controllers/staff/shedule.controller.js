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

//create Sched
exports.createSchedule = async (req, res) => {
  try {
    const { users_id } = req.user;
    
    req.body.schedule_dentist_datetime = "";
    // Check users-type if valid
    checkAuthorization(req, res, "Staff");

    // const denstist = await Users.findByPk(schedule_dentist);

    // Create featured dentist
    const sched = await Schedule.create({
      ...req.body,
      schedule_created_by: users_id,
      schedule_updated_by: users_id,
      // schedule_dentist_datetime: `${schedule_dentist} ${denstist.users_fname} ${schedule_start_time}-${schedule_end_time}`,
    });

    return dataResponse(
      res,
      sched,
      "Schedule created Successfully",
      "Schedule not created"
    );
  } catch (error) {
    return errResponse(res, error);
  }
};
// Update Sched
exports.updateSchedule = async (req, res) => {
  try {
    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Staff");
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

// Get all Schedule
exports.findAllSchedule = (req, res) => {
  const sched_dentist = req.user.users_id;
  // Check authorization first
  checkAuthorization(req, res, "Staff");
  Schedule.findAll({ where: { schedule_created_by: sched_dentist } },
    { include: {model: Users} 
  })
    .then((data) =>
      dataResponse(
        res,
        data,
        "Schedules Retrieved Successfully",
        "No featured dentist has been retrieved"
      )
    )
    .catch((err) => errResponse(res, err));
};
// Disapprove Schedule
exports.deleteSchedule = (req, res) => {
  const body = { schedule_status: "Disapproved" };
  const schedule_id = req.params.schedule_id;

  // Check authorization first
  checkAuthorization(req, res, "Staff");

  Schedule.update(body, {
    where: { schedule_id: schedule_id },
  })
    .then((result) => {
      if (result) emptyDataResponse(res, "Schedule successfully disapproved");
    })
    .catch((err) => errResponse(res, err));
};
