require("dotenv").config();

// import modules/packages
const express = require("express");
const db = require("./src/models");
const cors = require("cors");

// For token secret
// console.log(require("crypto").randomBytes(64).toString("hex"));

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully!");
  })
  .catch((error) => {
    console.error("Unable to connect to database:", error);
  });

if (process.env.ALLOW_SYNC === "true") {
  // database synch
  db.sequelize
    .query("SET FOREIGN_KEY_CHECKS = 0", { raw: true })
    .then(() => {
      db.sequelize
        .sync({ alter: true })
        .then(() =>
          console.log("Done adding/updating database based on the models")
        )
        .catch((error) => {
          console.log("Unable to add/update", error);
        });
    })
    .catch((error) => {
      console.log("Unable to connect", error);
    });
}

//initialize app
var app = express();

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all request will go here first (middleware)
app.use(cors());
app.use(require("./src/middleware/tokenValidator"));
app.use(require("./src/routes"));

const PORT = process.env.PORT || 5600;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
