

const db = require('../../models');
const Appointments = db.Appointments;
const { dataResponse, checkAuthorization, emptyDataResponse, errResponse } = require('../../helpers/helper.controller');

//create and save new appointment
exports.createAppointment = (req, res) => {

    const users_id  = req.user.users_id
    // Check users-type if valid
    checkAuthorization(req, res, "Admin");
       
    // Create featured dentist
    Appointments
        .create(req.body)
        .then((data) => dataResponse(res, data, "A new Appointment has been created", "Appointment is not added"))
        .catch((err) => errResponse(res, err)); 

};
// Update appointment
exports.updateAppointment = (req, res) => {
    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Admin")
    const appointments_id = req.params.appointments_id;

    Appointments.update(req.body, { where: { appointments_id: appointments_id }})
    .then((result) => {
      console.log(req.body);
      if (result) {
        // retrieve updated details
        Users.findByPk(data.users_id).then((result) => {
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
// Get All appointment
exports.findAllAppointment = (req, res) => {
    // Check authorization first
    checkAuthorization(req, res, "Admin")
    Appointments
        .findAll()
        .then(data => dataResponse(res, data, "Appointments Retrieved Successfully", "No Appointment has been retrieved"))
        .catch(err => errResponse(res, err));
};
// Disapprove Appointment
exports.deleteAppointment = (req, res) => {
  const body = { dentists_status: "Disapproved" };
  const appointments_id = req.params.appointments_id;
  
  // Check authorization first
  checkAuthorization(req, res, "Admin");

  Appointments.update(body, {
      where: { appointments_id : appointments_id },
    })
      .then(result => {
          if(result) emptyDataResponse(res, "Appointment is Disapproved")
      })
      .catch(err => errResponse(res, err)
)};  