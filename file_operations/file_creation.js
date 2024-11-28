var fs=require("fs")
var http = require("http")
var server = http.createServer((req,res)=>{
    fs.writeFile("hello2/hii.txt","jhgfdd","utf-8",(err)=>{
        if(err){
            res.write(JSON.stringify(err.message));
            res.end()
        }
        else{
            res.write("file created successfully")
            res.end()
        }
    })
})
var port = 3000
server.listen(port,()=>{
    console.log("hi server created")
})