var mysql = require("mysql");
var dbconnection;

if (process.env.JAWSDB_URL) {
  console.log(process.env.JAWSDB_URL)
  dbconnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("no jaws")
  dbconnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
  });
}

dbconnection.connect(function (err) {
  if (err) {
    console.error("error connecting:" + err.stack);
    return;
  }

  var query = 'DROP DATABASE IF EXISTS burgers_db;CREATE DATABASE burgers_db;USE burgers_db;CREATE TABLE burgers(id INT(10) NOT NULL AUTO_INCREMENT,burger_name VARCHAR(255),devoured BOOLEAN NOT NULL DEFAULT false,PRIMARY KEY(id));'
  connection.query(query, function (err, res) {
    if (err) {
      throw err;
    }
    var query2 = 'INSERT INTO burgers(burger_name, devoured)VALUES("bacon burger", false);INSERT INTO burgers(burger_name, devoured)VALUES("double bacon swiss cheese burger", false);INSERT INTO burgers(burger_name, devoured)VALUES("whiskey river chicken burger", false);INSERT INTO burgers(burger_name, devoured)VALUES("bbq pineapple avacodo chicken burger", false);INSERT INTO burgers(burger_name, devoured)VALUES("black bean lettuce wrap protein style burger", false);INSERT INTO burgers(burger_name, devoured)VALUES("big mac", false);'
    connection.query(query2, function (err, res) {
      if (err) {
        throw err;
      }
      console.log("...connected as id " + dbconnection.threadId);
    })
  })
});

module.exports = dbconnection;