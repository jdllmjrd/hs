// Import required packages
const db = require('../models');
const Users = db.Users;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../helpers/helper.controller');
// Get all accounts - checked
exports.getAllDentist = (req, res, next) => {
    Users
        .findAll({ 
            where: { 
                users_type: 'Dentist' }}
        )
        .then(data => dataResponse(res, data, 'User accounts are retrieved successfully', 'No user account has been retrieved'))
        .catch(err => errResponse(res, err));
}