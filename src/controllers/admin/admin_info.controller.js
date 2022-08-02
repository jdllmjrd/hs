// Import required packages
const db = require("../../models");
const Users = db.Users;
const helper = require("../../helpers/helper.controller");
const bcrypt = require('bcrypt');


// Admin info - checked
exports.getAdminInfo = (req, res, next) => {

  helper.checkAuthorization(req, res, 'Admin');

  db.Users
      .findByPk(req.user.users_id, {
          attributes: [
              'users_fname',
              'users_mname',
              'users_lname',
              'users_birthdate',
              'users_gender',
              'users_civil_status',
              'users_phone_number',
              'users_email',
              'users_type',
              'users_profile_pic'
          ]
      })   
      .then((data) => helper.dataResponse(res, data, 'A Record has been identified', 'No Record has been identified'))
      .catch((err) => helper.errResponse(res, err));
}


// Update admin information - checked

exports.updateAdminInfo = (req, res, next) => {

 if(req.user == null || req.user.users_type !== 'Admin') {
  res.sendStatus(403);
} else {
  db.Users
      .findByPk(req.user.users_id)
      .then((result) => {
          if (result) {
              db.Users
                  .update(req.body, {
                      where: {
                          users_id: req.user.users_id
                      }
                  })
                  .then(() => {
                      db.Users
                          .findByPk(req.user.users_id)
                          .then((data) => {
                              res.send({
                                  error: false,
                                  data: data,
                                  message: 'Admin record has been successfully updated'
                              })
                          })
                          .catch((err) => {
                              console.log(err);
                          })
                  })
                  .catch((err) => {
                      console.log(err);
                  })
              
          } else {
              res.send({
                  error: true,
                  message: 'No Admin has been identified'
              })
          }
      })
      .catch((err) => {
          console.log(err);
      })
}
}