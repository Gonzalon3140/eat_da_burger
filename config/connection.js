var mysql = require("mysql");
var dbconnection;

if (process.env.JAWSDB_URL) {
  dbconnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  dbconnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
  });
}

dbconnection.connect(function(err) {
  if (err) {
    console.error("error connecting:" + err.stack);
    return;
  }
  console.log("...connected as id " + dbconnection.threadId);
});

module.exports = dbconnection;
