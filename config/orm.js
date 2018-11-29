var connection = require("../config/connection.js");


var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        console.log(query)
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var query = `INSERT INTO ${table} (${cols}) VALUES ("${vals}")`;
        console.log(query)
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    eat: function (table, id, cols, con, cb) {
        var query = `UPDATE ${table} SET ${cols}=${con} WHERE id="${id}"`;
        console.log(query);
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;