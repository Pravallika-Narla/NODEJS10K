var http = require("http")
var url = require("url")
var fs = require("fs")
var server = http.createServer((req,res)=>{
    // var data = await fetch("https://fakestoreapi.com/products")
    // var fake_data = await data.json();
    var parsedurl=url.parse(req.url, true);
    if(parsedurl.pathname=="/products"){
        fs.readFile("file1.js","utf-8",(err,data)=>{
           if(err){
            res.write(JSON.stringify(err.message));
            res.end()
           }
           else{
            res.write(data);
            res.end()
            
           }
        // res.end()
        });
    }
    else{
        res.write("data not found")
        res.end()
    }

 
});var port = 3009
server.listen(port,()=>{
    console.log("server is running at "+"http://localhost:"+port)
})