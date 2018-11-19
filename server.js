let express = require('express');
let bodyParser = require("body-parser");
let mOverride = require('method-override');
var port = process.env.port || 3000;
var app = express();

app.use(express.static(_dirname + "/public"));

app.use(mOverride("method"));
app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(port);