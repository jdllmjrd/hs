/**
 * PATIENT REGISTRATION CONTROLLER
 */

 const db = require('../models');
 const Users = db.Users; // user model
 // const bcrypt = require("bcrypt");
//  const jwt = require("jsonwebtoken");

//create and save new user
exports.register = (req, res) => {
    //req.body.full_name = "";
    // req.body.created_by = req.user.id
    // req.body.password = await bcrypt.hash(
    // req.body.password, parseInt(process.env.SALT_ROUND),
    //     // Store hash in your password DB.
    // );
    Users.create(req.body)
    .then((data) => {   // Goal is to register as user
         res.send(data);
        })
    .catch((err) => {
      res.status(500).send(errors.map((e) => e.message));
    });
};