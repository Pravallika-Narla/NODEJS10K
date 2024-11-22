var http=require("http");
var fs=require("fs");
var url=require("url");
var server=http.createServer((req,res)=>{
    parsedurl=url.parse(req.url,true);
    if(parsedurl.pathname=="/products"){
        fs.unlink("./fs_module/del.txt",(err)=>{
            if(err){
                res.write(JSON.stringify(err.message));
                res.end();
            }else{
                res.write("file successfully deleted")
                res.end();
            }
            // res.end()
        })
    }else{
        res.write("please provide correct path")
        res.end()
    }
})
port=3899;
server.listen(port,()=>{
    console.log("server has been started "+"http://localhost:"+port);
});