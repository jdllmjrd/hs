const { Op } = require("sequelize");
const {
  checkAuthorization,
  dataResponse,
  errResponse,
  emptyDataResponse,
} = require("../../helpers/helper.controller");
const db = require("../../models");
const Invoices = db.Invoices;
const InvoicesServices = db.Invoices_services;
const Users = db.Users;

// create and save new invoice
exports.createInvoice = async (req, res) => {
  try {
    const { users_id } = req.user;
    checkAuthorization(req, res, "Admin");

    const { invoices_services } = req.body;

    const invoice = await Invoices.create({
      ...req.body,
      invoices_created_by: users_id,
      invoices_updated_by: users_id,
    });

    const invoicesServices = await InvoicesServices.bulkCreate(
      invoices_services.map((data) => ({
        ...data,
        inser_invoice_id: invoice.id,
      }))
    );

    const user = await Users.findByPk(users_id);

    return dataResponse(
      res,
      { invoice, invoicesServices, user },
      "A new Invoice has been created"
    );
  } catch (error) {
    return errResponse(res, error);
  }
};

// Update invoice
exports.updateInvoice = async (req, res) => {
  try {
    checkAuthorization(req, res, "Admin");
    const { users_id } = req.user;

    const { invoice_id } = req.params;
    const { invoices_services } = req.body;

    await Invoices.update(
      { ...req.body, invoices_updated_by: users_id },
      {
        where: { id: invoice_id },
      }
    );

    invoices_services.map(
      async (e) =>
        await InvoicesServices.update(
          {
            inser_service_name: e.inser_service_name,
            inser_service_price: e.inser_service_price,
          },
          {
            where: { id: e.id },
          }
        )
    );

    const invoice = await Invoices.findByPk(invoice_id, {
      include: [{ model: InvoicesServices, as: "dump_invoice" }],
    });

    return res.send({
      error: false,
      data: invoice,
      message: [process.env.SUCCESS_UPDATE],
    });
  } catch (error) {
    return res.status(500).send({
      error: true,
      data: [],
      message: error || process.env.GENERAL_ERROR_MSG,
    });
  }
};

// Get Invoice
exports.findInvoice = async (req, res) => {
  try {
    checkAuthorization(req, res, "Admin");
    const { id } = req.body;
    let invoice;

    // If no id where given -> display all invoices
    if (!id) {
      invoice = await Invoices.findAll({
        where: { invoices_status: { [Op.not]: "Deleted" } },
        include: [{ model: InvoicesServices, as: "dump_invoice" }],
      });
    } else {
      invoice = await Invoices.findByPk(id, {
        include: [{ model: InvoicesServices, as: "dump_invoice" }],
      });
    }

    return dataResponse(res, invoice, "Invoice retreived successfully");
  } catch (error) {
    return errResponse(res, error);
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    checkAuthorization(req, res, "Admin");

    const body = { invoices_status: "Deleted" };
    const id = req.params.invoice_id;

    await Invoices.update(body, { where: { id } });

    await InvoicesServices.destroy({ where: { inser_invoice_id: id } });

    return emptyDataResponse(res, "Invoice successfully deleted");
  } catch (error) {
    return errResponse(res, error);
  }
};
