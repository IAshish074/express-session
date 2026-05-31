const path = require("path")

exports.getUserPage = (req,res,next)=>{
    return res.sendFile(path.join(__dirname,"../","public","user.html"))
}

