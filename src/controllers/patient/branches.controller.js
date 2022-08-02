const db = require("../../models");
const Branches = db.Branches;
const { dataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');


exports.getAllBranches = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, "Patient")

    Branches
        .findAll()
        .then(data => dataResponse(res, data, "Branches Retrieved Successfully", "No Branch has been retrieved"))
        .catch(err => errResponse(res, err));
}