const db = require("../../models");
const Appointments = db.Appointments;
const Users = db.Users;
const Schedule = db.Dentists_schedules;
const Branches = db.Branches;
const {
  dataResponse,
  checkAuthorization,
  emptyDataResponse,
  errResponse,
} = require("../../helpers/helper.controller");

//create and save new appointment
exports.createAppointment = async (req, res) => {
  try {
    // Check users-type if valid
    checkAuthorization(req, res, "Staff");

    req.body.appointments_created_by = req.user.users_id;

    const appointment = await Appointments.create(req.body);
    return dataResponse(res, appointment, process.env.SUCCESS_CREATE);
  } catch (error) {
    return errResponse(res, err);
  }
};
// Update appointment
exports.updateAppointment = async (req, res) => {
  try {
    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Staff");
    const appointments_id = req.params.appointments_id;

    await Appointments.update(req.body, {
      where: {
        appointments_id,
      },
    });

    const appointment = await Appointments.findByPk(appointments_id);
    return res.send({
      error: false,
      data: appointment,
      message: process.env.SUCCESS_UPDATE,
    });
  } catch (error) {
    return res.status(500).send({
      error: true,
      data: [],
      message: err || process.env.GENERAL_ERROR_MSG,
    });
  }
};

// Get All appointment
exports.findAllAppointment = (req, res) => {
  // Check authorization first
  const users_id = req.user.users_id;
  checkAuthorization(req, res, "Staff");
  Appointments.findAll({
    where: {
      appointments_created_by: users_id,
    },
      include: [
        {
          model: Schedule, as: "app_sched"
        },
  
        {
          model: Branches, as : "branch"
        },
      ]
  })
    .then((data) =>
      dataResponse(
        res,
        data,
        "Appointments Retrieved Successfully",
        "No Appointment has been retrieved"
      )
    )
    .catch((err) => errResponse(res, err));
};
// Disapprove Appointment
exports.deleteAppointment = (req, res) => {
  const body = { appointments_status: "Disapproved" };
  const appointments_id = req.params.appointments_id;

  // Check authorization first
  checkAuthorization(req, res, "Staff");

  Appointments.update(body, {
    where: { appointments_id },
  })
    .then((result) => {
      if (result)
        emptyDataResponse(res, "Appointment is successfully deactivated");
    })
    .catch((err) => errResponse(res, err));
};
