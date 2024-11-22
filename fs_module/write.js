var http=require("http");
var fs=require("fs");
var url=require("url");
var server=http.createServer((req,res)=>{
    parsedurl=url.parse(req.url,true);
    if(parsedurl.pathname=="/products"){
        fs.writeFile("index.txt","Hello world","utf-8",(err)=>{
            if(err){
                res.write(JSON.stringify(err));
                res.end()
            }else{
                res.write("file created successfully");
            }
            res.end();
        })
    }else{
        res.write("file not found");
        res.end();
    }
})
port=3789;
server.listen(port,()=>{
    console.log("server has been started "+"http://localhost:"+port);
});