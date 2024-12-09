var express= require("express")
var app = express();
app.get("/",(req,res)=>{
    res.send("hii this is root api")
})
app.get("/product",(req,res)=>{
    res.send("hi this is product api")
})

port=3000,
app.listen(port,()=>{
    console.log("server started")
})