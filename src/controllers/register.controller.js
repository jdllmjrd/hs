/**
 * PATIENT REGISTRATION CONTROLLER
 */
 const db = require('../models');
 const Users = db.Users;
 const bcrypt = require("bcrypt");
 
 // Register a user and by default is a patient
 exports.register = async (req, res) => {
     req.body.users_full_name = "";

    // for image
     console.log(req.file.filename);
     req.body.users_profile_pic = req.file != undefined ? req.file.filename : "";
 
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