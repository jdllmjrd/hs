// Import required packages
const db = require("../../models");
const Users = require("../../models/users");
const helper = require("../../helpers/helper.controller");


// Admin info
exports.getAdminInfo = (req, res, next) => {

    const users_id = req.params.users_id;
    // Check a user if it is logged in 
    // check if user is admin
    helper.checkAuthorization(req, res, "Admin");

    Users
        .findByPk(req.users_id, {
            attributes: [
                "users_fname",
                "users_mname",
                "users_lname",
                "users_type"
            ]
        })   
        .then((data) => helper.dataResponse(res, data, "A record has been retrieved", "No Record"))
        .catch((err) => helper.errResponse(res, err));
}

// Update admin information
exports.updateAdminInfo = (req, res, next) => {


    req.body.users_updated_by = "req.users.users_id" ;
    // for image
    // console.log(req.file.filename);
    //req.body.profile_pic = req.file != undefined ? req.file.filename : "";
    // This is to check if admin is logged in 
    // and check its users_type
    helper.checkAuthorization(req, res, "Admin");

    // Check if user ID is existed in database
    Users
        .findByPk(req.user.user_ID)
        .then((result) => {

            // If no result return empty response
            if(result == null) helper.emptyDataResponse(res, 'No Record has been identified');

            // Update a Super Admin info
            Users
                .update(req.body, {
                    where: {
                        users_id: req.users_id
                    }
                })
                .then(() => {
                    Users
                        .findByPk(req.user.users_id)
                        .then((data) => helper.dataResponse(res, data, "Information has been updated successfully", "No record has been updated"))
                        .catch((err) => helper.errResponse(res, err));
                })
                .catch((err) => helper.errResponse(res, err));
    })
    .catch((err) => helper.errResponse(res, err));
}