const path = require("path")
exports.getAdminPage = (req,res,next)=>{
    return res.sendFile(path.join(__dirname,"../","public","admin.html"))
}