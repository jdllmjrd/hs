// import modules/packages
const express = require("express");
// to access .env file
const dotenv = require("dotenv").config();
// Import all models
const db = require("./backend/src/models");

//initialize app
var app = express();

// parse requests of content-type - application/json
app.use(express.json()); 

app.use(
    express.urlencoded({
        extended: true,
    })
);
//This is to check if db connects 
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully!');
  }).catch((error) => {
    console.error('Unable to connect to database:', err);
  })

  if (process.env.ALLOW_SYNC === "true"){
    // database synch
    db.sequelize.sync({alter: true })
      .then(() => console.log('Done adding/updating database based on the models'))
  }

// all request will go here first (middleware)
app.use((req, res, next) => {
    // Check SESSION or JWT
    console.log("Request has been sent to " + req.url);
    next();
  });

app.get("/", (req, res) =>{
    res.json({message: "HappySmile"});
});
/**
 * ROUTES
 */
// app.use(`${process.env.API_VERSION}/home`, require ("./backend/src/routes/home.routes"));
app.use(`${process.env.API_VERSION}/register`, require ("./backend/src/routes/register.routes"));
app.use(`${process.env.API_VERSION}/login`, require ("./backend/src/routes/login.routes"));


// Set up PORT
const PORT = process.env.PORT || 5600;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
