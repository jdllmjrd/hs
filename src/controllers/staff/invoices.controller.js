//Invoices Controller
const { Op } = require("sequelize");
const {
  errResponse,
  dataResponse,
  emptyDataResponse,
  checkAuthorization,
} = require("../../helpers/helper.controller");
const db = require("../../models");
const Invoices = db.Invoices;
const dump = db.Invoices_services;
const Users = db.Users;
const InvoicesServices = db.Invoices_services;

// Create an invoice only for those patients
// that has a successful appointment
// exports.create = async (req, res) => {
//   Invoices.create(req.body)
//     .then((data) => {
//       res.send({
//         error: false,
//         data: data,
//         message: "Invoice created successfully.",
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         error: true,
//         data: [],
//         message: err.errors.map((e) => e.message),
//       });
//     });
// };

exports.create = async (req, res) => {
  try {
    const { users_id } = req.user;
    checkAuthorization(req, res, "Staff");

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

// Get Invoice
exports.findInvoice = async (req, res) => {
  try {
    checkAuthorization(req, res, "Staff");
    const { users_id } = req.user;
    console.log(req.user);
    const { id } = req.body;
    let invoice;

    // If no id where given -> display all invoices
    if (!id) {
      invoice = await Invoices.findAll({
        where: {
          invoices_created_by: users_id,
          invoices_status: { [Op.not]: "Deleted" },
        },
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

// Find an invoice only for those patient
// that has a successful appointment
// exports.findOne = (req, res) => {
//   checkAuthorization(req, res, "Staff");
//   const id = req.params.id;

//   Invoices.findByPk(id)
//     .then((data) => {
//       res.send({
//         error: false,
//         data: data,
//         message: [process.env.SUCCESS_RETRIEVED],
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         error: true,
//         data: [],
//         message: err.errors.map((e) => e.message),
//       });
//     });
// };

// Update invoice
exports.updateInvoice = async (req, res) => {
  try {
    checkAuthorization(req, res, "Staff");
    const { users_id } = req.user;

    const { invoice_id } = req.params;
    const { invoices_services } = req.body;

    await Invoices.update(
      { ...req.body, invoices_updated_by: users_id },
      {
        where: { id: invoice_id },
      }
    );

    console.log(invoices_services);
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

// Update an invoice status from successful appointment
// exports.update = (req, res) => {
//   const id = req.params.id;

//   User.update(req.body, {
//     where: { id: id },
//   })
//     .then((result) => {
//       console.log(result);
//       if (result) {
//         //success
//         User.findByPk(id).then((data) => {
//           res.send({
//             error: false,
//             data: data,
//             message: [process.env.SUCCESS_UPDATE],
//           });
//         });
//       } else {
//         //error in updating
//         res.status(500).send({
//           error: true,
//           data: [],
//           message: ["Error in updating a record"],
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         error: true,
//         data: [],
//         message:
//           err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
//       });
//     });
// };

exports.deleteInvoice = async (req, res) => {
  try {
    checkAuthorization(req, res, "Staff");

    const body = { invoices_status: "Deleted" };
    const id = req.params.invoice_id;

    await Invoices.update(body, { where: { id } });

    await InvoicesServices.destroy({ where: { inser_invoice_id: id } });

    return emptyDataResponse(res, "Invoice successfully deleted");
  } catch (error) {
    return errResponse(res, error);
  }
};
