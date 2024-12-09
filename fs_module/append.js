var http=require("http")
var fs=require("fs");
var url=require("url");
var server=http.createServer((req,res)=>{
    parsedurl=url.parse(req.url,true)
    if(parsedurl.pathname=="/products"){
        fs.appendFile("./fs_module/index.txt","Hello Hyderabad","utf-8",(err)=>{
            if(err){
                res.write(JSON.stringify(err));
            }else{
               
                res.write("Text is appended to the mentioned file");
            }
        res.end();
        })
    }else{
        res.write("path is not correct");
        res.end();
    }

});
port=3566;
server.listen(port,()=>{
    console.log("server has been started "+"http://localhost:"+port);
});