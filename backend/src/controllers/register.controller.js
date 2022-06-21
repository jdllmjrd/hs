/**
 * PATIENT REGISTRATION CONTROLLER
 */

const db = require('../models');
const Users = db.Users; // user model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//create and save new user
exports.register = async (req, res) => {
    req.body.users_full_name = "";

    req.body.users_password = await bcrypt.hash(
        req.body.users_password, parseInt(process.env.SALT_ROUND),
     // Store password into hash.
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
      res.status(500).send({
        error: true,
        data: [],
        message: err.errors.map((e) => e.message),
      });
    });
};