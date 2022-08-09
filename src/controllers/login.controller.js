/**
 * LOGIN CONTROLLER
 * This controller is for user login
 */
// Import Required Modules/Packages
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const nodemailer = require("nodemailer");
const Users = db.Users;
const {
  errResponse,
  emptyDataResponse,
} = require("../helpers/helper.controller");

// Generate token
const generateToken = (data) => {
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: "30h" });
};

exports.login = (req, res) => {
  if (String(req.body.users_email) === "") {
    res.status(500).send({
      error: true,
      data: [],
      message: ["Username or Password is empty."],
    });
  }

  Users.findOne({
    where: { users_email: req.body.users_email, users_status: "Active" },
  })
    .then((data) => {
      if (data) {
        // compare password
        if (req.body.users_google_id) {
          if (req.body.users_google_id === data.users_google_id) {
            res.send({
              error: false,
              data: data,
              token: generateToken({
                users_id: data.users_id,
                users_full_name: data.users_full_name,
                users_email: data.users_email,
                users_type: data.users_type,
              }),
              message: [process.env.SUCCESS_RETRIEVED],
            });
          } else {
            res.status(500).send({
              error: true,
              data: [],
              message: ["Invalid username or Password."],
            });
          }
        } else {
          if (!req.body.users_password) {
            res.status(500).send({
              error: true,
              data: [],
              message: ["Username or Password is empty."],
            });
          }
          bcrypt.compare(
            req.body.users_password,
            data.users_password,
            function (err, result) {
              if (result) {
                // same password
                res.send({
                  error: false,
                  data: data,
                  token: generateToken({
                    users_id: data.users_id,
                    users_full_name: data.users_full_name,
                    users_email: data.users_email,
                    users_type: data.users_type,
                  }),
                  message: [process.env.SUCCESS_RETRIEVED],
                });
              } else {
                // invalid password
                res.status(500).send({
                  error: true,
                  data: [],
                  message: ["Invalid username or Password."],
                });
              }
            }
          );
        }
      } else {
        res.status(500).send({
          error: true,
          data: [],
          message: ["Username does not exists."],
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        data: [],
        message:
          err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
      });
    });
};

exports.recoverpw = (req, res) => {
  const { email } = req.body;

  if (String(email) === "" && email === null) {
    res.status(400).body({
      error: true,
      message: process.env.GENERAL_ERROR_MSG,
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  const link = "https://happysmile-web.herokuapp.com" || process.env.BASE_URL;

  const options = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Recover Password",
    text: `<p>Click the link to redirect to recover password <a href="${link}/Change/pages-changepw.php?email=${email}">Link</a></p>`,
  };

  transporter.sendMail(options, (err, data) => {
    if (err) {
      res.status(500).body({
        message: process.env.GENERAL_ERROR_MSG,
      });
    } else {
      console.log(data.response);
    }
  });
};

exports.newpw = (req, res) => {
  const { password, email } = req.body;

  if (String(password) === "" && password === null) {
    res.status(400).body({
      error: true,
      message: process.env.GENERAL_ERROR_MSG,
    });
    return;
  }

  const hash = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUND));

  Users.update(
    { users_password: hash },
    {
      where: {
        users_email: email,
      },
    }
  );

  res.status(200).body({
    message: process.env.SUCCESS_CREATE,
  });
};
