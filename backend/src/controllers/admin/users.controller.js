
// Import required packages
const db = require('../../models');
const Users = db.Users;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');
const bcrypt = require('bcrypt');

// Update Password
exports.updatePassword = (req, res) =>  {

    req.body.users_full_name = "";

    req.body.users_updated_by = "req.users.users_id" ;
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
// Get all accounts - checked
exports.getAllAccounts = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, 'Admin')

    Users
        .findAll()
        .then(data => dataResponse(res, data, 'User accounts are retrieved successfully', 'No user account has been retrieved'))
        .catch(err => errResponse(res, err));
}
// Create new account
exports.createAccount = async (req, res) => {
    checkAuthorization(req, res, "Admin")
    req.body.users_full_name = "";
    req.body.users_created_by = req.user.users_id;
        //console.log(req.file.filename);
        //req.body.profile_pic = req.file != undefined ? req.file.filename : "";
    req.body.users_password = await bcrypt.hash(
        req.body.users_password,
        parseInt(process.env.SALT_ROUNDS),
    );
    Users.create(req.body, { include: ["created"] })
        .then((data) => {
        Users.findByPk(data.users_id, { include: ["created"] }).then(
            (result) => {
            res.send({
                error: false,
                data: result,
                message: [process.env.SUCCESS_CREATE],
            });
            }
        );
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};
// Delete Account
exports.deleteAccount = (req, res) => {
    const body = { users_status: "Inactive" };
    const users_id = req.params.users_id;
    
    // Check authorization first
    checkAuthorization(req, res, "Admin");

    Users.update(body, {
        where: { users_id: users_id },
      })
        .then(result => {
            if(result) emptyDataResponse(res, "User record is successfully deactivated")
        })
        .catch(err => errResponse(res, err));
}
