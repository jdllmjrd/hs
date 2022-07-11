const {
  checkAuthorization,
  dataResponse,
  errResponse,
  emptyDataResponse,
} = require("../../helpers/helper.controller");
const db = require("../../models");
const Invoices = db.Invoices;

// create and save new invoice
exports.createInvoice = (req, res) => {
  const users_id = req.user.users_id;
  checkAuthorization(req, res, "Admin");

  // const { invoices_discount, grand_total } = req.body;

  // const discount = parseFloat(invoices_discount) / 100;
  // const total = grand_total * discount;

  Invoices.create({
    ...req.body,
    // total_after_discount: total,
    invoices_created_by: users_id,
    invoices_updated_by: users_id,
  })
    .then((data) => dataResponse(res, data, "A new Invoice has been created"))
    .catch((err) => errResponse(res, err));
};

// Update invoice
exports.updateInvoice = (req, res) => {
  checkAuthorization(req, res, "Admin");

  const invoice_id = req.params.invoice_id;

  Invoices.update(req.body, { where: { id: invoice_id } })
    .then((result) => {
      if (result) {
        Invoices.findByPk(invoice_id).then((result) => {
          res.send({
            error: false,
            data: result,
            message: [process.env.SUCCESS_UPDATE],
          });
        });
      } else {
        res.status(500).send({
          error: true,
          data: [],
          message: ["Error in updating a record"],
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        error: true,
        data: [],
        message:
          err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
      });
    });
};

// Get Invoice
exports.findInvoice = (req, res) => {
  checkAuthorization(req, res, "Admin");

  // if no data given in body it will display all invoice
  Invoices.findAll({ where: req.body })
    .then((data) => dataResponse(res, data, "Invoice Retriaved Successfully"))
    .catch((err) => errResponse(res, err));
};

exports.deleteInvoice = (req, res) => {
  checkAuthorization(req, res, "Admin");

  const body = { invoices_status: "Deleted" };
  const id = req.params.invoice_id;

  Invoices.update(body, { where: { id } })
    .then((result) => {
      if (result) emptyDataResponse(res, "Invoice successfully deleted");
    })
    .catch((err) => errResponse(res, err));
};
