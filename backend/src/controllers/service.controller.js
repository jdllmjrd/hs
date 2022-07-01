const db = require("../models");
const Service = db.Services;
const { errResponse, emptyDataResponse } = require('../helpers/helper.controller');

exports.getServices = (req, res, next) => {

    Service
        .findAll({ where: {services_status: "Active"}})
        .then(data => emptyDataResponse(res, data, "Services Retrieved Successfully", "No Services has been retrieved"))
        .catch(err => errResponse(res, err));
}