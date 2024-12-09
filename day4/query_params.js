var http = require("http")
var url=require("url")
var server=http.createServer((req,res)=>{
    // console.log(req.url)          /products/
    var data = url.parse(req.url,true)
    var param = data.pathname.split("/")[data.pathname.split("/").length-1]
    console.log(param)
    res.write(JSON.stringify(data))
    console.log(JSON.stringify(data.query))


    // res.write("smtg")
    res.end()

})
port=3000
server.listen(port,()=>{
    console.log("server learning")
})