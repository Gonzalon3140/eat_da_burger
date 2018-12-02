var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (val, cb) {
        var name = val.burger_name;
        orm.create("burgers", "burger_name", name, function (res) {
            cb(res);
        })
    },
    eat: function (id, cb) {
        orm.eat("burgers", id, "devoured", true, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;