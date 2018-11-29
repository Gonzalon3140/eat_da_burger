const express = require("express");
var routes = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 4000;
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();
// let bodyParser = require("body-parser");
// let mOverride = require("method-override");


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(routes);
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost: " + PORT);
  // log server activity in external file
});