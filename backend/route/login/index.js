const express = require("express");
const route = express.Router(); // 이거 두개는 꼭 필요함
const {login,signUp,idCheck} = require("./loginCtrl")
route.post("/login",login)     
route.post("/signUp",signUp)     
route.post("/idCheck",idCheck)     
module.exports = route;