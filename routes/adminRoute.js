const express = require("express")
const adminRouter = express.Router()
const adminController = require("../controllers/adminController.js")
const checkuser = require("../middleware/checkrole.js")


adminRouter.get("/",checkuser.checkAdmin,adminController.getAdminPage)



module.exports = adminRouter