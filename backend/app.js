const express = require("express");
const cors = require("cors");
const bbsRoute = require("./route/bbs");
const loginRoute = require("./route/login");
const path = require("path");
const moment = require("moment"); //설치한거
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
const date = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(date);
// const http = require("http");
// const fs = require("fs");
// const db = require("./db.inc");
// http.globalAgent.keepAlive = true;
// const cron = require('node-cron');
// exports.moment = moment;

// const loginRoute = require("./routelogin");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", bbsRoute);
app.use("/", loginRoute);
//app.use("/login",route)
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 제공
//  app.get('/login',(req ,res) =>{
//   res.sendFile(path.join(__dirname, 'public/index.html'))
//    })

// app.get('/view',(req ,res) =>{
//   res.sendFile(path.join(__dirname, 'public/bbsView.html'))
// })
// 'C:\GitHub\BBS\backend\public'
// console.log(__dirname)




const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
