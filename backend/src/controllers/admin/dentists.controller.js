
/**
 * 
 * CONTROLLER DENTIST FOR ADMIN
 */
const db = require('../../models');
const featuredDentist = db.Dentists;
const Users = db.Users;
const { dataResponse, checkAuthorization, emptyDataResponse, errResponse } = require('../../helpers/helper.controller');

//create and save new featured dentist - checked
exports.createDentist = (req, res) => {
    
    req.body.dentists_created_by = req.user.users_id;
    req.body.dentists_image = req.file != undefined ? req.file.filename : "";
    req.body.dentists_full_name = "";
    // Check users-type if valid
    checkAuthorization(req, res, "Admin");
       
    // Create featured dentist
    featuredDentist
        .create(req.body)
        .then((data) => dataResponse(res, data, "A new record has been added", "Record is not added"))
        .catch((err) => errResponse(res, err)); 

};
// Update featured Dentist - checked
exports.updateDentist = (req, res) => {
    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Admin")
    const dentists_id = req.params.dentists_id;
    req.body.dentists_updated_by = req.user.users_id;
    req.body.dentists_full_name = "";
    
    console.log(req.file.filename);
    req.body.dentists_image = req.file != undefined ? req.file.filename : "";
   

    featuredDentist.update(req.body, { where: { dentists_id: dentists_id }}, { include: ["admin_updated_dentist"] })
    .then((result) => {
      console.log(req.body);
      if (result) {
        // retrieve updated details
        Users.findByPk(data.users_id, { include: ["admin_updated_dentist"] }).then((result) => {
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
      res.status(500).send({
        error: true,
        data: [],
        message:
          err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
      });
    });
};
// Get all featured Dentist - checked
exports.getAll = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, "Admin")
    featuredDentist
        .findAll()
        .then(data => dataResponse(res, data, "Featured Dentist Retrieved Successfully", "No featured dentist has been retrieved"))
        .catch(err => errResponse(res, err));
};
// Deactivate featured Dentist in order to be not seen on frontend -- checked
exports.deleteDentist = (req, res) => {
  const body = { dentists_status: "Inactive" };
  const dentists_id = req.params.dentists_id;
  
  // Check authorization first
  checkAuthorization(req, res, "Admin");

  featuredDentist.update(body, {
      where: { dentists_id : dentists_id },
    })
      .then(result => {
          if(result) emptyDataResponse(res, "Featured is successfully deactivated")
      })
      .catch(err => errResponse(res, err)
)};  