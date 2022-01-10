const express = require("express"); //이거
const bbsRoute = express.Router(); // 이거 두개는 꼭 필요함
const {getList,delBody,postInsert,modiPatch} = require("./bbsCtrl")

// route.post('/login', (req) => {
//     const {id, password} = req.body
//     connection.query('SELECT id, addr from users WHERE id  = ? and password = ?', () => {
//         res.send(rows) // 
//         // res.send()
//         res.send('success')
//     })
// })

bbsRoute.get("/bbs",getList);
bbsRoute.delete("/bbs",delBody);
bbsRoute.post("/bbs",postInsert);
bbsRoute.patch("/bbs",modiPatch)
// put: 모든 데이터 수정, patch : 부분적으로 수정

module.exports = bbsRoute;