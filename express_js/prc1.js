var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("hello")
})
var port = 3000;
app.listen(port,()=>{
    console.log("SERver startedddd")
})