
/**
 * 
 * CONTROLLER DENTIST FOR ADMIN
 */

const db = require('../../models');
const featuredDentist = db.Dentists;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');

//create and save new featured dentist
exports.createDentist = (req, res) => {
   // Check users-type if valid
   checkAuthorization(req, res, "Admin");

   featuredDentist
       .findOne({ where: { dentists_id: req.body.dentists_id, dentists_full_name: req.body.dentists_full_name }})
       .then(result => {
           if(result) emptyDataResponse(res, "")
           else {
               // Set id
               req.body.dentists_id = req.dentists_id
               
               // Create featured dentist
               featuredDentist
                   .create(req.body)
                   .then((data) => dataResponse(res, data, "Featured dentist has been added", "Featured Dentist is not added"))
                   .catch((err) => errResponse(res, err)); 
           }
       })
       .catch(err => errResponse(res, err));
};
// Update featured Dentist
exports.updateDentist = (req, res) => {

    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Admin")

    featuredDentist
        .update(req.body, {
            where: {
                dentist_id: req.params.dentist_id
            }
        })
        .then(data => dataResponse(res, data, "Updated Successfully", "No updates happened"))
        .catch(err => errResponse(res, err))
}
// Get all featured Dentist
exports.getAll = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, "Admin")

    featuredDentist
        .findAll({ where: { dentists_id: req.dentists_id }})
        .then(data => dataResponse(res, data, "Featured Dentist Retrieved Successfully", "No featured dentist has been retrieved"))
        .catch(err => errResponse(res, err));
}
// Deactivate featured Dentist in order to be not seen on frontend
exports.deleteDentist = (req, res) => {
    const body = { dentists_status: "Inactive" };
    const users_id = req.params.users_id;
    
    // Check authorization first
    checkAuthorization(req, res, "Admin");

    featuredDentist.update(body, {
        where: { users_id: users_id },
      })
        .then(result => {
            if(result) emptyDataResponse(res, "Dentist record is successfully deactivated")
        })
        .catch(err => errResponse(res, err));
}
