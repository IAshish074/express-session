const path = require("path")
const fs = require("fs")
const userData = require("../data/data.json")
exports.getLogin = (req,res,next)=>{
    return res.sendFile(path.join(__dirname,"../","public","login.html"))
}

exports.handPostLogin = (req,res,next)=>{

    const {email,password} = req.body

    const data = JSON.parse(fs.readFileSync(path.join(__dirname,"../","data","data.json"),"utf-8"))
   
   const user = data.find(
  u => u.username === email && u.password === password
);


    if(!user){
        return res.redirect("/auth/login")
    }

    req.session.user = {
        username:user.username,
        role:user.role,
    }
     if (user.role === "admin") {
    return res.redirect("/admin")
  } else {
    return res.redirect("/user")
  }

}

