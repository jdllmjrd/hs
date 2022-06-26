// This will render the controller
// to home page
const db = require('../../models');
const nodemailer = require("nodemailer");

exports.render = (req, res, next) => res.send('Home page');

// Get All Featured Dentist
// For Featured Dentist section
exports.getAllDentist = (req, res) => {
    db.Dentists.getAllDentist({
      where: { status: "Active" },
    })
      .then((data) => {
        res.send({
          error: false,
          data: data,
          message: [process.env.SUCCESS_RETRIEVED],
        });
      })
      .catch((err) => {
        res.status(500).send({
          error: true,
          data: [],
        });
      });
  };
// This will send an email for contact us section
exports.send = (req, res) => {
    // res.send();
    const output = `
    <p> You have sent a message to HappySmile Dental Clinic </p>
    <h3> Message Details: </h3>
    <ul>
        <li>Name: ${req.body.name} </li> 
        <li>Name: ${req.body.subject} </li>
        <li>Name: ${req.body.body} </li> 
    </ul>

    `;

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // CHANGE THE HOST AFTER DEPLOYMENT 
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        // You can modify this after deployment please
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
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