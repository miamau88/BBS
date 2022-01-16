const express = require("express");
const route = express.Router(); // 이거 두개는 꼭 필요함
const {view,process} = require("./loginCtrl")
route.post("/login",process.login)     
route.post("/signUp",process.signUp)     
route.post("/idCheck",process.idCheck)  

route.get("/",view.login)
route.get("/signUp",view.signUp)
route.get("/bbsList",view.bbsList)




module.exports = route;