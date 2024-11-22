var http = require("http")
var server = http.createServer(async(req,res)=>{
    console.log(req.method)
    var response = await fetch("https://fakestoreapi.com/products");
    var data=await response.json();
    res.write(JSON.stringify(data));
    res.end()

})
port=3000
server.listen(port,()=>{
    console.log("server running")
})