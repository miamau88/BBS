const express = require("express"); //이거
const loginRoute = express.Router(); // 이거 두개는 꼭 필요함
const {getList,delBody,postInsert} = require("./bbsCtrl.js")