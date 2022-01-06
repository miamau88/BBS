const express = require("express");
const cors = require("cors");
const route = require("./route");
const path = require('path');

// const loginRoute = require("./routelogin");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/bbs",route)

app.use(express.static(path.join(__dirname, 'public'))) // 정적 파일 제공

// app.get('/view',(req ,res) =>{
//   res.sendFile(path.join(__dirname, 'public/bbsView.html'))
// })
// 'C:\GitHub\BBS\backend\public'
// console.log(__dirname)

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
