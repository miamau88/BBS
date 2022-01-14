const db = require("./../../db.inc");
exports.login = (req, res) => {
  const { userId, userPw } = req.body;
  const query = `SELECT * FROM user where id=? and pw=?`;
  const param = [userId, userPw];
  db.query(query, param, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    if (rows.length < 1) {
      res.send({ status: "fail" });
    } else {
      res.send({ status: "success" });
    }
  });
};
exports.idCheck = (req, res) => {
  const { userId } = req.body;
  const query = `SELECT* FROM user where id=?`;
  const param = [userId];
  db.query(query, param, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    if (rows.length == 0) {
      console.log("없음");
      return res.send({ status: "success" });
    } else {
      console.log("있음");
      return res.send({ status: "fail" });
    }
  });
};

exports.signUp = (req, res) => {
  const { userId, userPw, name } = req.body;
  // const query = `SELECT * FROM user where id=? and pw=?`;
  const query = `SELECT* FROM user where id=?`;
  const param = [userId];
  db.query(query, param, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    if (rows.length !== 0) {
      console.log("있음");
      res.send({ status: "failId" });
    } else {      
      const query = `insert into user (id,pw,name) value(?,?,?)`;
      const param = [userId, userPw, name];
      db.query(query, param, function (err, rows, fields) {
        if (err) throw err;
        res.send({ status: "Sign success" });       
      });
    }
  });
};

