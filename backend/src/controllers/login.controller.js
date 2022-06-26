/**
 * LOGIN CONTROLLER

 * This controller is for user login
 */

// Import Required Modules/Packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../../src/models");
const Users = db.Users;
const { errResponse, emptyDataResponse } = require('../helpers/helper.controller');


// Dotenv Configuration
require('dotenv').config();

// Generate token
const generateToken = (data) => { 
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '10h' }); 
}

exports.login = (req, res) => {
    if (String(req.body.users_email) === "" || String(req.body.users_password) === "") {
      res.status(500).send({
        error: true,
        data: [],
        message: ["Username or Password is empty."],
      });
    }
  
    Users.findOne({ where: { users_email: req.body.users_email, users_status: "Active" } })
      .then((data) => {
        if (data) {
          // compare password
          bcrypt.compare(req.body.users_password,data.users_password,
            function (err, result) {
              if (result) {
                // same password
                res.send({
                  error: false,
                  data: data,
                  token: generateToken({
                    users_id: data.users_id,
                    users_full_name: data.users_full_name,
                    users_email: data.users_email,
                    users_type: data.users_type
                  }),
                  message: [process.env.SUCCESS_RETRIEVED],
                });
              } else {
                // invalid password
                res.status(500).send({
                  error: true,
                  data: [],
                  message: ["Invalid username and Password."],
                });
              }
            }
          );
        } else {
          res.status(500).send({
            error: true,
            data: [],
            message: ["Username does not exists."],
          });
        }
      })
      .catch((err) => {
        console.log(err);
          res.status(500).send({
            error: true,
            data: [],
            message:
              err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
          });
      });
}