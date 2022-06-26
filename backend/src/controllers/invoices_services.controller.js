//Invoice Services Controller
const db = require("../models");
const InvoicesServices = db.InvoicesServices;

// Creates an invoice service name for those 
// successful invoices and creates inser_service_price
exports.create = async (req, res) => {

    InvoicesServices.create(req.body).then((data) => {
        res.send({
            error : false,
            data : data,
            message : "Invoice Services created successfully."

        });
    }).catch((err) => {
        res.status(500).send({
            error : true,
            data : [],
            message : err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
        })
    });
}



// Finds the inser invoice id
exports.findOne = (req, res) => {
    const id = req.params.id;
    
    InvoicesServices.findByPk(id).then((data) => {
        res.send({
            error: false,
            data: data,
            message: [process.env.SUCCESS_RETRIEVED],
        });
    })
    .catch((err) => {
        res.status(500).send({
            error : true,
            data : [],
            message : err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,

    });
    });
};
