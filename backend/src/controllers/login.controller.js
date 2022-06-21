/**
 * LOGIN CONTROLLER

 * This controller is for user login
 */


// Import Required Modules/Packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../../src/models");
const { errResponse, emptyDataResponse } = require('../helpers/helper.controller');

// Dotenv Configuration
require('dotenv').config();


// Generate token
const generateToken = (data) => { 
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '12h' }); 
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

    db.Users
        // To check if user exists
        .findOne({
            where: { 
                details  : req.body.users_email,
                verified : 1,
            },
            attributes: [],
            include: {
                model      : db.Users,
                as         : 'user',
                attributes : ['users_id', 'users_type', 'users_password']
            },              
        })
        .then((data) => {

            // If no data then send empty response
            if (data == null) return emptyDataResponse(res, 'That user does not exist');

            // Else validate password
            bcrypt.compare(req.body.users_password, data.user.users_password, (err, hasResult) => {

                // Display error if exists
                if(err) console.log(err);
                
                // If no result then send empty reponse
                if(!hasResult) return emptyDataResponse(res, 'Invalid details or password');
                
                // Else send reponse with data
                const id = data.user.users_id;
                const users_type = data.user.users_type;
                
                res.send({
                    error: false,
                    data: {
                        users_id: id,
                        users_type: users_type,
                        token: generateToken({ 
                            users_id   : id, 
                            users_type : users_type, 
                        }),
                    },
                    message: "A user has been successfully identified",
                });
            })
        })
        .catch((err) => errResponse(res, err));
}