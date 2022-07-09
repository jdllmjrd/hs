const db = require("../models");
const Service = db.Services;
const { errResponse, emptyDataResponse } = require('../helpers/helper.controller');

exports.getServices = (req, res) => {

    Service
        .findAll({ where: {services_status: "Active"}})
        .then(data => emptyDataResponse(res, data, "Services Retrieved Successfully", "No Services has been retrieved"))
        .catch(err => errResponse(res, err));
}

exports.getOneService = (req, res) => {

    const services_id = req.params.services_id
    Service
        .finByPk({ where: 
            {services_id: services_id}
        })
        .then(data => emptyDataResponse(res, data, "Service Retrieved Successfully", "No Service has been retrieved"))
        .catch(err => errResponse(res, err));
}