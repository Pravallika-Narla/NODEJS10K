var http = require("http")
var url = require("url")
var fs = require("fs")
var server = http.createServer(async(req,res)=>{
    var data = await fetch("https://fakestoreapi.com/products")
    var fake_data = await data.json();
    var parsedurl=url.parse(req.url, true);
    if(parsedurl.pathname=="/products"){
        fs.writeFile("index.txt",JSON.stringify(fake_data),"utf-8",(err)=>{
           if(err){
            res.write(JSON.stringify(err.message));
            // res.end()
           }
           else{
            res.write("file has been created")
            // res.end()
            
           }
        res.end()
        });
    }
    else{
        res.write("file not found")
        res.end()
    }

 
});var port = 3008
server.listen(port,()=>{
    console.log("server is running at "+"http://localhost:"+port)
})