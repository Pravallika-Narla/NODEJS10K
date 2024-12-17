var express = require("express")
var app = express()
var bcrypt = require("bcrypt")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hi this is home page")

})
app.post("/product",async(req,res)=>{
    var salt = 10
    var hashed_password = await bcrypt.hash(req.body.password,salt)
    res.status(200).send(hashed_password)
})
port = 3000
app.listen(port,()=>{
    console.log("server started")
})

