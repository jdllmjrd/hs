
// Import required packages
const db = require('../../models');
const Users = db.Users;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');
const bcrypt = require('bcrypt');

// Get all accounts - checked
exports.getAllAccounts = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, 'Admin')

    Users
        .findAll()
        .then(data => dataResponse(res, data, 'User accounts are retrieved successfully', 'No user account has been retrieved'))
        .catch(err => errResponse(res, err));
}
// Create new account - checked
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
        Users.findByPk(data.id, { include: ["created"], }).then(
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
// Delete Account - checked
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
// updateAccount - checked
exports.updateAccount = async (req, res) => {
    const users_id = req.params.users_id;
    req.body.users_full_name = "";
    req.body.users_updated_by = req.user.users_id;

    // Check authorization first
    checkAuthorization(req, res, "Admin");
  
    if (req.body.users_password) {
      req.body.users_password = await bcrypt.hash(
        req.body.users_password,
        parseInt(process.env.SALT_ROUNDS)
      );
    }
  
    Users.update(req.body, { where: { users_id: users_id }}, { include: ["updated"] })
      .then((result) => {
        if (result) {
          // retrieve updated details
          Users.findByPk(users_id, { include: ["updated"] }).then((data) => {
            res.send({
              error: false,
              data: result,
              message: [process.env.SUCCESS_UPDATE],
            });
          });
        } else {
          res.status(500).send({
            error: true,
            data: [],
            message: ["Error in updating a record"],
          });
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
};
