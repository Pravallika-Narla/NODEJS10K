var fs=require("fs")
var http = require("http")
var server = http.createServer((req,res)=>{
    fs.readdir("r/h",(err,files)=>{
        if(err){
            res.write(JSON.stringify(err.message));
            res.end()
        }
        else{
            res.write(JSON.stringify(files));
            res.end()
        }
    })
})
var port = 3000
server.listen(port,()=>{
    console.log("hi server created")
})