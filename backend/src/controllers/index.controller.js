// This will render the controller
// to home page
const db = require("../models");
const Dentist = db.Dentists;
const nodemailer = require("nodemailer");
const { dataResponse, errResponse } = require('../helpers/helper.controller');

// Get All Featured Dentist
// For Featured Dentist section
exports.getDentist = (req, res, next) => {
  Dentist
    .findAll({ where: { dentists_status: "Active"}})
    .then(data => dataResponse(res, data, "Featured Dentist Retrieved Successfully", "No featured dentist has been retrieved"))
    .catch(err => errResponse(res, err));
}

// This will send an email for contact us section
exports.send = (req, res) => {
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // CHANGE THE HOST AFTER DEPLOYMENT 
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        // You can modify this after deployment please
      user: process.env.AUTH_EMAIL, // generated ethereal user
      pass: process.env.AUTH_PASSWORD // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
main().catch(console.error);
} 