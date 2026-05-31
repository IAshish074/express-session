const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/authController.js")


authRouter.get("/login",authController.getLogin)
authRouter.post("/login",authController.handPostLogin)

module.exports = authRouter