// Import required packages
const db = require("../../models");
const Users = db.Users;
const helper = require("../../helpers/helper.controller");
const bcrypt = require('bcrypt');


// Patient info - checked
exports.getPatientInfo = (req, res, next) => {
    const users_id = req.user.users_id;
    // Check a user if it is logged in 
    // check if user is Patient
    helper.checkAuthorization(req, res, "Patient");
    
     Users.findOne({ where: { users_id: users_id } })
    .then((data) => {
      res.send({
        error: false,
        data: data,
        message: [process.env.SUCCESS_RETRIEVED],
      });
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


// Update Patient information - checked
exports.updatePatientInfo = (req, res) => { 

  // Check authorization first
 checkAuthorization(req, res, "Patient");
  const users_id = req.params.users_id;
  req.body.users_updated_by = req.user.users_id;
  req.body.users_full_name = "";

  console.log(req.file.filename);
  req.body.users_profile_pic = req.file != undefined ? req.file.filename : "";

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
      res.status(500).send({
        error: true,
        data: [],
        message:
          err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
      });
    })
};
