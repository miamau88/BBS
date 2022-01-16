const express = require("express");
const cors = require("cors");
const bbsRoute = require("./route/bbs");
const loginRoute = require("./route/login");
const path = require("path");
const moment = require("moment"); //설치한거
const mysql = require("mysql2");
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);
const ejs = require('ejs');
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
const date = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(date);

// const option = {
//   host: "localhost",
//   user: "root",
//   password: "root",
//   dateStrings: "date",
//   database: "study",
//   // connectionLimit: 5,
//   // waitForConnections: true,
//   // queueLimit: 0
// }


// const connectSessionDB = mysql.createPool(option);
// const sessionStore = new MysqlStore(connectSessionDB)

    // const http = require("http");
    // const fs = require("fs");
    // http.globalAgent.keepAlive = true;
    // const cron = require('node-cron');
    // exports.moment = moment;
    
    // const loginRoute = require("./routelogin");
    const app = express();    
    app.set('view engine', 'ejs')
    app.use(cors());
    app.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }
    }))
    app.use(express.json());
    app.use("/", bbsRoute);
    app.use("/", loginRoute);
    
    //app.use("/login",route)
    app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 제공

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
