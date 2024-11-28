var fs=require("fs")
var http = require("http")
var server = http.createServer((req,res)=>{
    fs.mkdir("file_operation/r/h",{recursive:true},(err)=>{
        if(err){
            res.write(JSON.stringify(err.message));
            res.end()
        }
        else{
            res.write("folder created successfully")
            fs.writeFile("file_operation/r/h/file1.txt","hi",(err)=>{
                if(err){
                    res.write(JSON.stringify(err.message));
                    res.end();
                }else{
                    res.write("file created successfully");
                    fs.readFile("file_operation/r/h/file1.txt","utf-8",(err,data)=>{
                        if(err){
                            res.write(JSON.stringify(err.message));
                            res.end();
                        }else{
                            res.write(data);
                            res.end();
                        }

                    })
                   
                }
            })
          
        }
    })
})
var port = 3000
server.listen(port,()=>{
    console.log("hi server created")
})