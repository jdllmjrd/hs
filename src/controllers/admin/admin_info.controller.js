// Import required packages
const db = require("../../models");
const Users = db.Users;
const helper = require("../../helpers/helper.controller");
const bcrypt = require("bcrypt");

// Admin info - checked
exports.getAdminInfo = (req, res, next) => {
  helper.checkAuthorization(req, res, "Admin");

  db.Users.findByPk(req.user.users_id, {
    attributes: [
      "users_fname",
      "users_mname",
      "users_lname",
      "users_birthdate",
      "users_gender",
      "users_civil_status",
      "users_phone_number",
      "users_email",
      "users_type",
      "users_profile_pic",
    ],
  })
    .then((data) =>
      helper.dataResponse(
        res,
        data,
        "A Record has been identified",
        "No Record has been identified"
      )
    )
    .catch((err) => helper.errResponse(res, err));
};

// Update admin information - checked

exports.updateAdminInfo = (req, res, next) => {
  helper.checkAuthorization(req, res, "Admin");
  req.body.users_full_name = "";

  console.log(req.file.filename);
  req.body.users_profile_pic = req.file != undefined ? req.file.filename : "";

  // Check if user ID is existed in database
  db.Users.findByPk(req.user.users_id)
    .then((result) => {
      // If no result return empty response
      if (result == null)
        helper.emptyDataResponse(res, "No Record has been identified");

      // Update a Admin info
      db.Users.update(req.body, {
        where: {
          users_id: req.user.users_id,
        },
      })
        .then(() => {
          // Get Admin info
          db.Users.findByPk(req.user.users_id)
            .then((data) =>
              helper.dataResponse(
                res,
                data,
                "A Record has been successfully updated",
                "No changes in the record"
              )
            )
            .catch((err) => helper.errResponse(res, err));
        })
        .catch((err) => helper.errResponse(res, err));
    })
    .catch((err) => helper.errResponse(res, err));
};
