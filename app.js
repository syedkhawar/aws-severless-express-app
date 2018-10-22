const cookieParser = require('cookie-parser')
const express = require("express");
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();
const bodyParser = require("body-parser");
const csrf = require("csurf");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_database', 'sneakpeeks', 'sneakpeeks', {
  host: 'sneakpeeks.c7utaq5cyk7t.us-east-2.rds.amazonaws.com',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: false
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// Requiring Controllers
const homeCOntroller = require("./controllers/homeController");
const todoCOntroller = require("./controllers/todoController");
const userCOntroller = require("./controllers/userController");


// MODELS



app.set("view engine", "ejs");

app.use(awsServerlessExpressMiddleware.eventContext());

// setup route middlewares
const csrfProtection = csrf({ cookie: true })
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

//Static Files
app.use(express.static("./public"));

// we need to use cookie parser because it's required for csurf
app.use(cookieParser());


// Trigger Controllers
homeCOntroller(app, urlEncodedParser, csrfProtection);
todoCOntroller(app, urlEncodedParser, csrfProtection);
userCOntroller(app, urlEncodedParser, csrfProtection, sequelize, Sequelize);


module.exports = app;