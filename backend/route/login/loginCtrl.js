const mysql = require("mysql2/promise");
const db = require("./../../config.js");
exports.login = async (req, res) => {
  const { userId, userPw } = req.body;
  try {
    const conn = await mysql.createConnection(db);
    const query = `SELECT * FROM user where id=? and pw=?`;
    const param = [userId, userPw];
    const [rows] = await conn.query(query, param);
    //console.log(rows)
    // console.log('id',rows[0]['id']);
    // const obj = {name: 'a'}
    // const key = 'name'
    // obj[key]
    // obj.key
    if (rows.length < 1) {
      res.send({ status: "fail" });
    } else {
      res.send({ status: "success" });
    }
  } catch (err) {
    console.log(err);
  }

  //new Promise().then().catch(console.log) //.catch(err => console.log(err))

  //  const result = await conn.query(sql, param)
  //  const rows = result[0]
  //  const fields = result[1]

  //  const [rows, fields] = reulst

  // //  const arr = ['apple', 'banana']
  //  const ['apple', 'banana'] = arr
};
exports.idCheck = async (req, res) => {
  const { userId } = req.body;
  try {
    const conn = await mysql.createConnection(db);
    const query = `SELECT* FROM user where id=?`;
    const param = [userId];
    const [rows] = await conn.query(query, param);    
    console.log(rows);
    if (rows.length == 0) {
      console.log("없음");
      return res.send({ status: "success" });
    }
    console.log("있음");
    return res.send({ status: "fail" });
  } catch (err) {
    console.log(err);
  }
};

exports.signUp = async (req, res) => {
  const { userId, userPw, name } = req.body;
  // const query = `SELECT * FROM user where id=? and pw=?`;
  try {
    const conn = await mysql.createConnection(db);
    const query = `SELECT* FROM user where id=?`;
    const param = [userId];
    const [rows] = await conn.query(query, param);
    console.log(rows);
    if (rows.length !== 0) {
      console.log("있음");
      return res.send({ status: "failId" });
    }
    const query2 = `insert into user (id,pw,name) value(?,?,?)`;
    const param2 = [userId, userPw, name];
    await conn.query(query2, param2);
    res.send({ status: "Sign success" });
    // console.log(rows);
  } catch (err) {
    console.log(err);
  }
};
