var http=require("http");
var url=require("url")
var fs=require("fs");
var server=http.createServer((req,res)=>{
    var parsedurl=url.parse(req.url,true);
    if(parsedurl.pathname=="/products"){
        fs.readFile("./fs_module/db.json","utf-8",(err,data)=>{
            if(err){
                res.write(JSON.stringify(err));
            }else{
                res.write(data);
            }
            res.end();
        });
    }else{
        res.write("file not found");
        res.end();
    }
})
port=3267;
server.listen(port,()=>{
    console.log("server has been started "+"http://localhost:"+port);
});