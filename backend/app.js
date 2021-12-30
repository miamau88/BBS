const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

// localhost:5000/bbs
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

connection.connect();

app.get("/bbs", (req, res) => {
  // connection.connect();
  connection.query("SELECT * from study.bbs", function (err, rows, fields) {
    if (err) throw err;
    res.send(rows);
    console.log(rows);
  });
});

app.delete("/bbs", (req, res) => {
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
});

app.post("/bbs", (req, res) => {
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
          res.send(rows);
          console.log(rows);
        }
      );
    }
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
