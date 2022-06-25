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

// Login Controller
exports.login = (req, res) => {
    
    // Check if email and password field is empty
    if (String(req.body.users_email) === '' || String(req.body.users_password) === '') {
        return res.status(500).send({
            error   : true,
            message : "Details and Password cannot be empty",
        });
    } 
    Users
        .findOne({
            where: { 
                users_email  : req.body.users_email,
                users_status : "Active",
            },      
        })
        .then((data) => {

            // If no data then send empty response
            if (data == null) return emptyDataResponse(res, 'That user does not exist');

            // Else validate password
            bcrypt.compare(req.body.users_password, data.users_password, (err, hasResult) => {

                // Display error if exists
                if(err) console.log(err);
                
                // If no result then send empty reponse
                if(!hasResult) return emptyDataResponse(res, 'Invalid details or password');
                
                // Else send reponse with data
                const users_id = data.users_id;
                const users_type = data.users_type;
                const users_status = data.users_status;
                const users_full_name = data.users_full_name;
                
                res.send({
                    error: false,
                    data: {
                        users_id: users_id,
                        users_type: users_type,
                        users_full_name: users_full_name,
                        token: generateToken({ 
                            users_id   : users_id, 
                            users_type : users_type, 
                            users_status: users_status
                        }),
                    },
                    message: "A user has been successfully identified",
                });
            })
        })
        .catch((err) => errResponse(res, err));
}

