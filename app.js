const cookieParser = require('cookie-parser')
const express = require("express");
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();
const bodyParser = require("body-parser");
const csrf = require("csurf");


// Requiring Controllers
const homeCOntroller = require("./controllers/homeController");
const todoCOntroller = require("./controllers/todoController");
const userCOntroller = require("./controllers/userController");


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
userCOntroller(app, urlEncodedParser, csrfProtection);

  
module.exports = app;