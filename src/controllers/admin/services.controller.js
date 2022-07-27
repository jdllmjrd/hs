/**
 *
 * CONTROLLER SERVICE FOR ADMIN
 */
const db = require("../../models");
const Services = db.Services;
const Users = db.Users;
const {
  dataResponse,
  emptyDataResponse,
  checkAuthorization,
  errResponse,
} = require("../../helpers/helper.controller");

//create and save new Service - checked
exports.createService = (req, res) => {
  req.body.services_created_by = req.user.users_id;
  req.body.services_image = req.file != undefined ? req.file.filename : "";
  // Check users-type if valid
  checkAuthorization(req, res, "Admin");

  Services.findOne({ where: { services_name: req.body.services_name } })
    .then((result) => {
      if (result) emptyDataResponse(res, "");
      else {
        // Set id
        req.body.services_id = req.services_id;

        // Create Service
        Services.create(req.body)
          .then((data) =>
            dataResponse(
              res,
              data,
              "A new record has been added",
              "Record is not added"
            )
          )
          .catch((err) => errResponse(res, err));
      }
    })
    .catch((err) => helper.errResponse(res, err));
};
// Update Services - checked
exports.updateService = (req, res) => {
  req.body.services_updated_by = req.params.users_id;
  const services_id = req.params.services_id;
  req.body.services_image = req.file != undefined ? req.file.filename : "";

  // Check if user-status is valid
  // note: always check authorization using users_type
  checkAuthorization(req, res, "Admin");

  Services.update(
    req.body,
    { where: { services_id: services_id } },
    { include: ["admin_updated_services"] }
  )
    .then((result) => {
      console.log(req.body);
      if (result) {
        // retrieve updated details
        Services.findByPk(services_id).then((result) => {
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
// Get all Services - checked
exports.getAllService = (req, res, next) => {
  // Check authorization first
  checkAuthorization(req, res, "Admin");

  Services.findAll()
    .then((data) =>
      dataResponse(
        res,
        data,
        "Services Retrieved Successfully",
        "No Service has been retrieved"
      )
    )
    .catch((err) => errResponse(res, err));
};
// Deactivate Service in order to be not seen on frontend -- checked
exports.deleteService = (req, res) => {
  const body = { services_status: "Inactive" };
  const services_id = req.params.services_id;

  // Check authorization first
  checkAuthorization(req, res, "Admin");

  Services.update(body, {
    where: { services_id: services_id },
  })
    .then((result) => {
      if (result) emptyDataResponse(res, "Service is successfully deactivated");
    })
    .catch((err) => errResponse(res, err));
};
