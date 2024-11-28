var fs=require("fs")
var http = require("http")
var server = http.createServer((req,res)=>{
    fs.copyFile("index.txt","copy.txt",(err)=>{
        if(err){
            res.write(JSON.stringify(err.message));
            res.end()
        }
        else{
            res.write("file has been copied");
            fs.readFile("../copy.txt","utf-8",(err,data)=>{
                if(err){
                    res.write(JSON.stringify(err.message));
                    res.end();
                }else{
                    res.write("read successfully");
                    res.end();
                }
            })
            res.end()
        }
    })
})
var port = 3000
server.listen(port,()=>{
    console.log("hi server created")
})