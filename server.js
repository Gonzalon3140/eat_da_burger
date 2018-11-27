let express = require("express");
let bodyParser = require("body-parser");
let mOverride = require("method-override");
var PORT = process.env.port || 4000;
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(mOverride("method"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

var exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});