const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  dateStrings: "date",
  database : "study"
});


//-- select * from 메인 테이블 left join 테이블명 on 메인테이블.컬럼 = 테이블.컬럼

connection.connect();

const getList = (req, res) => {
    // connection.connect();
    connection.query("SELECT no,title,regdate,msg,name As member FROM bbs left join user On bbs.member = user.idx", function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
      console.log(rows);
    });
  }
   
  const delBody = (req, res) => {
    // connection.connect();
    const id = req.body.no; // 속서명 적어줘야됨
    connection.query(
      `delete from study.bbs where no=?`,
      [id],
      function (err, rows, fields) {
        if (err) throw err;
        res.send(rows);
        // console.log(rows);
      }
    );
  } 
  const postInsert = (req, res) => {
    console.log("post");
    const { title, member, msg } = req.body;
    console.log(req.body);
    // connection.connect();
    connection.query(
      // `insert into study.bbs (no,title,regdate,member) value(?,?,?,?)`,[no,title,date,member],
      `insert into study.bbs (title,member,msg) value(?,?,?)`,
      [title, member, msg],
      function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        connection.query(
          `select * from study.bbs order by no desc limit 1 `,
          function (err, rows, fields) {
            if (err) throw err;
            console.log(rows[0]);
            res.send(rows[0]);
          }
        );
      }
    );
  }
  
  // exports.함수명으로도 내보내기 가능 
  const modiPatch = (req, res) => {    
    const {no,title,msg} = req.body;
    console.log(req.body);
    // connection.connect();
    connection.query(
      // `insert into study.bbs (no,title,regdate,member) value(?,?,?,?)`,[no,title,date,member],
      `update study.bbs set title=?,msg=? where no=? `,[title,msg,no],
       function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);    
        res.send(rows);
      }
    );
  }
  module.exports = {getList,delBody,postInsert,modiPatch}