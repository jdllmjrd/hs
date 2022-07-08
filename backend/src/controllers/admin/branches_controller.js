const db = require("../../models");
const Branches = db.Branches;
const Users = db.Users;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');


//create and save new branch -- checked
exports.createBranches = (req, res) => {

   req.body.branches_created_by = req.user.users_id;
   // Check users-type if valid
   checkAuthorization(req, res, "Admin");

    // Create Branch
    Branches
        .create(req.body,{ 
            include: ["added_branch"] 
        })
        .then((data) => {
            Users.findByPk(data.users_id, { 
                include: 
                    ["created_branch", "added_branch"]
                }).then(
                (result) => {
                res.send({
                    error: false,
                    data: result,
                    message: [process.env.SUCCESS_CREATE],
                });
                }
            );
            }).catch((err) => errResponse(res, err)); 
        }

// Update Branches -- checked
exports.updateBranches = (req, res) => {

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
// Get all Branches -- checked
exports.getAllBranches = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, "Admin")

    Branches
        .findAll()
        .then(data => dataResponse(res, data, "Branches Retrieved Successfully", "No Branch has been retrieved"))
        .catch(err => errResponse(res, err));
}
// Deactivate Branch -- checked
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

