//Invoices Controller
const db = require("../../models");
const Invoices = db.Invoices;
const dump = db.Invoices_services

// Create an invoice only for those patients
  // that has a successful appointment
exports.create = async (req, res) => {
  Invoices.create(req.body).then((data) => {
    res.send({
        error : false,
        data : data,
        message : "Invoice created successfully."

    });
}).catch((err) => {
    res.status(500).send({
        error : true,
        data : [],
        message : err.errors.map((e) => e.message)
    })
});
};
// Find an invoice only for those patient
// that has a successful appointment
exports.findOne = (req, res) => {
  const id = req.params.id;
    
    Invoices.findByPk(id).then((data) => {
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
            message : err.errors.map((e) => e.message),

    });
    });
};

// Update an invoice status from successful appointment
 exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  }).then((result) => {
    console.log(result);
    if (result) {
      //success
      User.findByPk(id).then((data) => {
        res.send({
          error: false,
          data: data,
          message: [process.env.SUCCESS_UPDATE],
        });
      });
    } else {
      //error in updating
      res.status(500).send({
        error: true,
        data: [],
        message: ["Error in updating a record"],
      });
    }
  })
  .catch((err) => {
    res.status(500).send({
        error : true,
        data : [],
        message : err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
      });
    });
 };


