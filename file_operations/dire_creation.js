var fs=require("fs")
var http = require("http")
var server = http.createServer((req,res)=>{
    fs.mkdir("file_operation/folder1",{recursive:true},(err)=>{
        if(err){
            res.write(JSON.stringify(err.message));
            res.end()
        }
        else{
            res.write("folder created successfully");
            fs.writeFile("file_operation/folder1/hello1.html","hello world",(err)=>{
                if(err){
                    res.write(JSON.stringify(err.message));
                    res.end();
                }else{
                    res.write("data is inserted succesfully");
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