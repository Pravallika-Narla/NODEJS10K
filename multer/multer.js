var express = require("express")
var multer = require("multer")
var app = express()
var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname+"/images");

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
var upload = multer({storage:storage})
app.get("/product",upload.single("file"),(req,res)=>{
    res.send({
        file:req.file,
        data:req.body
    })
})
var port = 3000
app.listen(port,()=>{
    console.log("server started")
})