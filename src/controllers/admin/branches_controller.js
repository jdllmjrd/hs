const db = require("../../models");
const Branches = db.Branches;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');


//create and save new branch
exports.createBranches = (req, res) => {

   req.body.branches_created_by = req.user.users_id;
   // Check users-type if valid
   checkAuthorization(req, res, "Admin");

   Branches
        .create(req.body)
        .then((data) => dataResponse(res, data, "A new branch has been added", "Branch is not added"))
        .catch((err) => errResponse(res, err)); 
};
// Update Branches
exports.updateBranches = (req, res) => {

    req.body.branches_updated_by = req.user.users_id;
    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Admin")

    Branches
        .update(req.body, {
            where: {
               branches_id: req.params.branches_id
            },
        })
        .then(data => dataResponse(res, data, "Updated Successfully", "No updates happened"))
        .catch(err => errResponse(res, err))
}
// Get all Branches
exports.getAllBranches = (req, res) => {
    
    // Check authorization first
    checkAuthorization(req, res, "Admin")

    Branches
        .findAll()
        .then(data => dataResponse(res, data, "Branches Retrieved Successfully", "No Branch has been retrieved"))
        .catch(err => errResponse(res, err));
}
// Deactivate Branch in order to be not seen on frontend

exports.deleteBranch = (req, res) => {
    const body = { branches_status: "Close" };
    const branches_id = req.params.branches_id;
    // Check authorization first
    checkAuthorization(req, res, "Admin");

    Branches
        .update(body, { where: { branches_id: branches_id }})
        .then(result => {
            if(result) emptyDataResponse(res, "Branch Successfully Deactivated")
        })
        .catch(err => errResponse(res, err));
}