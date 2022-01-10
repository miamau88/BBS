const db = require("./../../db.inc")
exports.login = (req,res) =>{
const { userId,userPw } = req.body;    
const query =  `SELECT * FROM user where id=? and pw=?`
const param = [userId,userPw]
db.query(query, param, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    if(rows.length < 1){
      res.send({ status: "fail" })    
    }else{
    
      res.send({ status: "success" })
    }
    
  });


}