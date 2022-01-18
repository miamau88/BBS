const mysql = require("mysql2/promise");
const db = require("./../../config.js");
const moment = require("moment"); //설치한거
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
const date = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(date);
// is_Object = function (a) {
//   return !!a && a.constructor === Object;
// };

//-- select * from 메인 테이블 left join 테이블명 on 메인테이블.컬럼 = 테이블.컬럼
const view = {
  list: (req, res) => {
    res.render("bbsList.ejs", { id: 1 ,date});
    console.log(req.session.userid)
    
  },  
  log : (req,res) =>{    
    res.render("log.ejs")
  },
};
const process = {
  getList: async (req, res) => {
    try {
      const conn = await mysql.createConnection(db);
      // const param = [req.session.userid]
      const param = 1
      const query =
        "SELECT no,title,regdate,msg,name As member FROM bbs left join user On bbs.member = user.idx where user.idx=?";
      const [rows] = await conn.query(query,param);
      res.send(rows);
    } catch (err) {
      console.log(err);
    }
  },
  delBody: async (req, res) => {
    try {
      const id = req.body.no; // 속서명 적어줘야됨
      const conn = await mysql.createConnection(db);
      const query = `delete from bbs where no=?`;
      const param = [id];
      const [rows] = await conn.query(query, param);
      res.send(rows);
    } catch (err) {
      console.log(err);
    }
  },
  // -- select * from mainTable join subTable on m.col = s.col 
//   SELECT no,title,regdate,msg,name as member FROM bbs join user on bbs.member = user.idx; 
// -- 필요한 컬럼만 불러오고 , name컬럼을 member로 변경해주고 , bbs테이블에 user테이블을 조인해서 bbs.member에 user테이블에 idx를 대입
  postInsert: async (req, res) => {
    try {
      const { title, member, msg } = req.body;
      // console.log(req.body);
      const conn = await mysql.createConnection(db);
      const query = `insert into bbs (title,member,msg) value(?,?,?)`;
      const param = [title, member, msg];
      const [rows] = await conn.query(query, param);
      const query2 = `SELECT no,title,regdate,msg,name as member FROM bbs join user on bbs.member = user.idx order by no desc limit 1`;
      const [rows2] = await conn.query(query2);
      res.send(rows2[0]);
    } catch (err) {
      console.log(err);
    }
  },
  // exports.함수명으로도 내보내기 가능
  // exports.modiPatch = (req, res) => {
  modiPatch: async (req, res) => {
    try {
      const { no, title, msg } = req.body;
      // console.log(req.body);
      const conn = await mysql.createConnection(db);
      const query = `update bbs set title=?,msg=? where no=? `;
      const param = [title, msg, no];
      const [rows] = await conn.query(query, param);
      res.send(rows);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = { view, process };
