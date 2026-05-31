const express = require("express")
const adminRouter = require("./routes/adminRoute.js")
const userRouter = require("./routes/userRoute.js")
const authRouter = require("./routes/authRouter.js")
const session = require("express-session")
const app = express()
const PORT = 3000

app.use(session({
    secret:"AshishKumarMishra",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:30*60*1000,
        httpOnly:true
    }
}))


app.use(express.urlencoded({extended:true}))
app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use("/auth",authRouter)




app.listen(PORT,()=>{
    console.log("http://localhost:3000")
})