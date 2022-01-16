const db = require("./../../db.inc");
is_Object = function (a) {
  return !!a && a.constructor === Object;
};

//-- select * from 메인 테이블 left join 테이블명 on 메인테이블.컬럼 = 테이블.컬럼

exports.getList = (req, res) => {
  // db.connect();
  db.query(
    "SELECT no,title,regdate,msg,name As member FROM bbs left join user On bbs.member = user.idx",
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
      // console.log(rows);
    }
  );
};

exports.delBody = (req, res) => {
  // db.connect();
  const id = req.body.no; // 속서명 적어줘야됨
  db.query(
    `delete from bbs where no=?`,
    [id],
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
      // console.log(rows);
    }
  );
};

exports.postInsert = (req, res) => {
  console.log("post");
  const { title, member, msg } = req.body;

  console.log(req.body);
  // db.connect();
  db.query(
    `insert into bbs (title,member,msg) value(?,?,?)`,
    [title, member, msg],
    function (err, rows, fields) {
      if (err) throw err;
      // console.log(rows);
      db.query(
        `SELECT no,title,regdate,msg,name as member FROM bbs join user on bbs.member = user.idx order by no desc limit 1`,
        function (err, rows, fields) {
          if (err) throw err;
          // console.log(rows[0]);
          res.send(rows[0]);
        }
      );
    }
  );
};

// exports.함수명으로도 내보내기 가능
exports.modiPatch = (req, res) => {
  // is_Object(req)
  // console.log(is_Object)
  const { no, title, msg } = req.body;
  console.log(req.body);

  try {
    const query = `update bbs set title=?,msg=? where no=? `;
    const param = [title, msg, no];
    // `insert into study.bbs (no,title,regdate,member) value(?,?,?,?)`,[no,title,date,member],
    db.query(query, param, (err, rows) => {
      if (err) throw err;
      console.log("테스트");
      res.send(rows);
      // console.log(rows);
    })
  } catch (err) {
    console.log(err);
  }
}
