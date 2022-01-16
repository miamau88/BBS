// const mysql = require("mysql2");
const db = {
// const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    dateStrings: "date",
    database : "study",
  }
  // const promisePool = pool.promise();
  module.exports = db
  