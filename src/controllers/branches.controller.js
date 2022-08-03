// Import required packages
const db = require('../models');
const Branches = db.Branches;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../helpers/helper.controller');

// Get all Branches
exports.getAllBranches = (req, res, next) => {
    Branches
        .findAll({ 
            where: { 
                branches_status: 'Open'
            }
        })
        .then(data => dataResponse(res, data, "Branches Retrieved Successfully", "No Branch has been retrieved"))
        .catch(err => errResponse(res, err));
}