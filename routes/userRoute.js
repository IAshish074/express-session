const express = require("express")
const homeRouter =express.Router()
const userController = require("../controllers/userController.js")
const checkuser = require("../middleware/checkrole.js")


homeRouter.get("/",checkuser.checkUser,userController.getUserPage)


module.exports = homeRouter