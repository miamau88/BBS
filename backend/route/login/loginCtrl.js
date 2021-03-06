const mysql = require("mysql2/promise");
const db = require("./../../config.js");
const hashPw = require("bcryptjs");
const view = {
  login: async (req, res) => {
    // const conn = await mysql.createConnection(db);
    // const query = `SELECT * FROM user where id=? and pw=?`;
    // const param = ['test1','1234'];
    // const [rows] = await conn.query(query, param);
    res.render("login.ejs", {
      // id : rows[0].id
    });
  },
  signUp: (req, res) => {
    res.render("signUp.ejs");
  },
};

const process = {
  login: async (req, res) => {
    const { userId, userPw } = req.body;   
    try {
      const conn = await mysql.createConnection(db);
      const query = `SELECT * FROM user where id=?`;
      const param = [userId, userPw];
      const [rows] = await conn.query(query, param);
      const pwCheck = await hashPw.compare(userPw,rows[0].pw)
      // console.log(pwCheck)      
      //console.log(rows)
      // console.log('id',rows[0]['id']);
      // const obj = {name: 'a'}
      // const key = 'name'
      // obj[key]
      // obj.key
      // console.log(rows)
      // if (rows.length < 1 || pwCheck == false) {
      if (pwCheck == false) {
      
        res.send({ status: "fail" });
      } else {
      
        req.session.userid = rows[0].idx;
        req.session.username = rows[0].id;
        res.send({ status: "success" });
      }
    } catch (err) {
      console.log(err);
    }
  },
  idCheck: async (req, res) => {
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
  },
  signUp: async (req, res) => {
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
      const salt = await hashPw.genSalt(10) 
      const hashRes = await hashPw.hash(userPw, salt)   
      console.log(hashRes)
      const query2 = `insert into user (id,pw,name) value(?,?,?)`;
      const param2 = [userId, hashRes, name];
      await conn.query(query2, param2);
      res.send({ status: "Sign success" });
      // console.log(rows);
    } catch (err) {
      console.log(err);
    }
  },
  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};

//new Promise().then().catch(console.log) //.catch(err => console.log(err))

//  const result = await conn.query(sql, param)
//  const rows = result[0]
//  const fields = result[1]

//  const [rows, fields] = reulst

// //  const arr = ['apple', 'banana']
//  const ['apple', 'banana'] = arr

module.exports = { view, process };
