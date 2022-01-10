const express = require("express");
const route = express.Router(); // 이거 두개는 꼭 필요함
const {login} = require("./loginCtrl")
route.post("/login",login)      
module.exports = route;