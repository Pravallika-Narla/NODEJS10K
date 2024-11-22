var http = require("http")
var server = http.createServer((req,res)=>{
    res.write("pravallika")
    console.log(req.method);
    res.end()

})
port=3000;
server.listen(port,()=>{
    console.log("server has been started"+"http://localhost:"+port);
})