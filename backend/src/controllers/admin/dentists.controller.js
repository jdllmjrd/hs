
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
   
   req.body.dentists_image = req.file != undefined ? req.file.filename : "";
   req.body.dentists_full_name = "";

   featuredDentist.create(req.body, { include: ["created_dentists"] })
    .then((data) => {
        featuredDentist.findByPk(data.id, { include: ["created_dentists"], }).then(
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
}
// Update featured Dentist
exports.updateDentist = (req, res) => {

    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Admin")
    req.body.dentists_image = req.file != undefined ? req.file.filename : "";
    req.body.dentists_full_name = "";

    featuredDentist
        .update(req.body, {
            where: {
                dentists_id: req.params.dentists_id
            },
            include: ["created_dentists"] 
    
        })
        .then(data => dataResponse(res, data, "Updated Successfully", "No updates happened"))
        .catch(err => errResponse(res, err))
}


// Get all featured Dentist
exports.getAll = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, "Admin")

    featuredDentist
        .findAll()
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
