/**
 * LOGIN CONTROLLER
 * This controller is for user login
 */
// Import Required Modules/Packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models");
const Users = db.Users;
const { errResponse, emptyDataResponse } = require('../helpers/helper.controller');


// Dotenv Configuration
require('dotenv').config();

// Generate token
const generateToken = (data) => { 
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '30h' }); 
}

exports.login = (req, res) => {
    
  // Check if email and password field is empty
  if (String(req.body.authDetails) === '' || String(req.body.password) === '') {
      return res.status(500).send({
          error   : true,
          message : "Email and Password cannot be empty",
      });
  } 
  
  Users
      .findOne({
          where: { 
              users_email  : req.body.users_email,
              verified : 1,
          },
          attributes: [],
      })
      .then((data) => {
          if (data == null) return emptyDataResponse(res, 'That user does not exist');

          bcrypt.compare(req.body.users_password, data.user.users_password, (err, hasResult) => {

              if(err) console.log(err);
              if(!hasResult) return emptyDataResponse(res, 'Invalid details or password');
              
              // Else send reponse with data
              const users_id = data.user.users_id;
              const users_type = data.user.users_type;
              
              res.send({
                  error: false,
                  data: {
                      users_id: users_id,
                      users_type: users_type,
                      token: generateToken({ 
                          users_id   : users_id, 
                          users_type : users_type, 
                      }),
                  },
                  message: "A user has been successfully identified",
              });
          })
      })
      .catch((err) => errResponse(res, err));
}