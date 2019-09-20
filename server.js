// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var mysql = require("mysql");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b4574f5d4a38bd",
  password: "019cabc3",
  database: "heroku_0f8262141827b85"
});
connection.connect();

// Static directory
app.use(express.static("public"));
app.use(
  "/scripts",
  express.static(__dirname + "/node_modules/nutrition-label-jquery-plugin/")
);

// Routes
// =============================================================
require("./routes/api-Routes.js")(app);
require("./routes/html-Routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
