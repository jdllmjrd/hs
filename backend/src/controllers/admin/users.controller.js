
// Import required packages
const db = require('../../models');
const Users = db.Users;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');
const bcrypt = require('bcrypt');


// Update Password
exports.updatePassword = (req, res) =>  {

    // Check authorization first, only the admin can update passwords to other users
    checkAuthorization(req, res, 'Admin');

    // Get password from req.body
    const new_password = bcrypt.hashSync(req.body.new_password, 10) ;

    // Find user and check password
    Users
        .findByPk(req.users_id, { attributes: ["users_id", "users_password"] })
        .then(result => {
            console.log(req.body);
            if(result) {
                bcrypt.compare(req.body.current_password, result.password, (err, hasResult) => {

                    // Display error if exists
                    if(err) console.log(err);
                    
                    // If no result then send empty reponse
                    if(!hasResult) return emptyDataResponse(res, 'Invalid details or password');
                    
                    // Else update user password
                    Users
                        .update({ users_password: new_password }, { where: { users_id: req.users_id }})
                        .then(data => dataResponse(res, data, 'Password has been changed successfully', 'Password has been changed successfully'))
                        .catch(err => errResponse(res, err));
                });
            }
        })
        .catch(err => errResponse(res, err));
};
// Get all accounts
exports.getAllAccounts = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, 'Admin')

    Users
        .findAll({ where: { users_id: req.users_id }})
        .then(data => dataResponse(res, data, 'User accounts are retrieved successfully', 'No user account has been retrieved'))
        .catch(err => errResponse(res, err));
}
// Create new account
exports.createAccount = (req, res) => {
    
    // Check Authorization first
    checkAuthorization(req, res, "Admin");

    Users
        .findOne({ where: { details: req.body.details }})
        .then(result => {
            if(result) emptyDataResponse(res, 'Account already exist')
            else {
                
                // Set user ID
                req.body.users_id = req.users_id
                
                // Create Account
                Users
                    .create(req.body)
                    .then((data) => dataResponse(res, data, 'New account has been created', 'Failed to create account'))
                    .catch((err) => errResponse(res, err)); 
            }
        })
        .catch(err => errResponse(res, err));
};
// Delete Account
exports.deleteAccount = (req, res) => {

    // Check authorization first
    checkAuthorization(req, res, "Admin");

    Users
        .destroy({ where: { user_account_ID: req.params.user_account_ID }})
        .then(result => {
            if(result) emptyDataResponse(res, 'An account is successfully deleted')
        })
        .catch(err => errResponse(res, err));
    }
    