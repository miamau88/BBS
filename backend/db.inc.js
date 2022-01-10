const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    dateStrings: "date",
    database : "study"
  });
db.connect();
module.exports = db;
  
  