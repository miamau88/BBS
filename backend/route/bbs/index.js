const express = require("express"); //이거
const route = express.Router(); // 이거 두개는 꼭 필요함
const {view,process} = require("./bbsCtrl")

// route.post('/login', (req) => {
//     const {id, password} = req.body
//     connection.query('SELECT id, addr from users WHERE id  = ? and password = ?', () => {
//         res.send(rows) // 
//         // res.send()
//         res.send('success')
//     })
// })
route.get("/bbsList",view.list)


route.get("/bbs",process.getList);
route.delete("/bbs",process.delBody);
route.post("/bbs",process.postInsert);
route.patch("/bbs",process.modiPatch)
// put: 모든 데이터 수정, patch : 부분적으로 수정

module.exports = route;