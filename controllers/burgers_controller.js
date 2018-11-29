var burger = require("../models/burger.js");
var exphbr = require("express-handlebars");
var express = require("express");
var router = express.Router();
var app = express();


app.engine("handlebars", exphbr({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// router.get("/", function (req, res) {
//     res.redirect("/burgers");
// });

router.get("/", function (req, res) {
    burger.all(function (data) {
        var allBurg = {
            burger: data
        };
        res.render("index", allBurg);
    });
});

router.post("/", function (req, res) {
    console.log(req.body);
    burger.create(req.body, function (result) {
        console.log(res);
        res.render("index", result);
    });
});

router.put("/:id", function (req, resp) {
    burger.eat(req.params.id, function (res) {
        console.log(result);
        resp.render("index", res);

    });
});

module.exports = router;