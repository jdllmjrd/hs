// Import required packages
const db = require("../../models");
const Users = db.Users;
const helper = require("../../helpers/helper.controller");
const bcrypt = require('bcrypt');


// Staff info - checked
exports.getStaffInfo = (req, res, next) => {
    const users_id = req.user.users_id;
    // Check a user if it is logged in 
    // check if user is Staff
    helper.checkAuthorization(req, res, "Staff");
    
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


// Update admin information - checked
exports.updateStaffInfo = async (req, res) => {
  const users_id = req.param.users_id;
  // Check a user if it is logged in 
  helper.checkAuthorization(req, res, "Staff");
  req.body.users_updated_by = req.user.users_id;
  req.body.users_fname = req.user.users_fname;

    //console.log(req.file.filename);
    //req.body.profile_pic = req.file != undefined ? req.file.filename : "";
  
    if (req.body.users_password) {
      req.body.users_password = await bcrypt.hash(
        req.body.users_password,
        parseInt(process.env.SALT_ROUNDS)
      );
    }

    Users.update(req.body, { where: { users_id: users_id,
    }}, { include: ["updated"] })
        .then((result) => {
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
