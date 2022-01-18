exports.isLogin = (req,res,next) =>{
    if (req.session.userid == undefined) {
        return res.redirect('/')
      }
     next() 
}




