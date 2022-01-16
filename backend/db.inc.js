const mysql = require("mysql2");
// const pool = mysql.createConnection({
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    dateStrings: "date",
    database : "study",
    connectionLimit: 5,
    waitForConnections: true,
    queueLimit: 0
  });
  // const promisePool = pool.promise();
  module.exports = pool
  