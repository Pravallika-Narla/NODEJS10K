var express = require("express")
var app = express()
var cont=require("./database.js")
app.get("/products",(req,res)=>{
    cont.query("select * from emp",(err,data)=>{
        if(err){
            res.send({
                status:400,
                message:err.message
            })
        }
        else{
            res.send({
                status:200,
                message:data
            })
        }
    })
})
var port = 3000
app.listen(port,()=>{
    console.log("server started")
})