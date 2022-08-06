// This will render the controller
// to home page
const db = require("../models");
const Dentist = db.Dentists;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { dataResponse, errResponse } = require('../helpers/helper.controller');

// Get All Featured Dentist
// For Featured Dentist section
exports.getDentist = (req, res, next) => {
  Dentist
    .findAll({ where: { dentists_status: "Active"}})
    .then(data => dataResponse(res, data, "Featured Dentist Retrieved Successfully", "No featured dentist has been retrieved"))
    .catch(err => errResponse(res, err));
}

exports.findOneDentist = (req, res) => {
  const dentists_id = req.params.dentists_id
  Dentist
    .findByPk({ where: { dentists_id: dentists_id}})
    .then(data => dataResponse(res, data, "Featured Dentist Retrieved Successfully", "No featured dentist has been retrieved"))
    .catch(err => errResponse(res, err));
}


// This will send an email for contact us section
exports.send = async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const subject = `${body.subject}`
  const name = `${body.name}`

  await sgMail.send({
    to:  process.env.AUTH_EMAIL, 
    from: name,
    subject: subject,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.send({
    error: false,
    status: 'Ok'
 })
  .catch((err) => {
    res.status(500).send(err);
  });
}