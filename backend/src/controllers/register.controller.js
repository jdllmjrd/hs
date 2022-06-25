/**
 * PATIENT REGISTRATION CONTROLLER
 */

const db = require('../models');
const Users = db.Users;
// const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");
// const datatable = require("sequelize-datatables");



// Register a user and by default is a patient
exports.register = async (req, res) => {
    req.body.users_full_name = "";

    req.body.users_created_by = "req.users.users_id" ;

    // Store password into hash.
    req.body.users_password = await bcrypt.hash(
      req.body.users_password, parseInt(process.env.SALT_ROUND),
    );
    Users.create(req.body)
    .then((data) => {   // Goal is to register as user
         res.send({
            error: false,
            data: data,
            message: [process.env.SUCCESS_REGISTRATION],
         });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
  }

