var http = require("http")
var url = require("url")

var server = http.createServer(async(req,res)=>{
    let data = await fetch("https://fakestoreapi.com/products")
    let fake_data = await data.json();

    var url_data = url.parse(req.url,true)
    var param_data = url_data.pathname.split("/")[url_data.pathname.split("/").length-1]
    // console.log(param_data);
    var filter_data = fake_data.filter((i)=>{
          return i.id == param_data;
    }) 
    if(filter_data.length){
        res.write(JSON.stringify(filter_data[0]))
    }else{
        res.write("data not found")
    }
    res.end("")

})
var port = 3000
server.listen(port,()=>{
    console.log("server is running at "+"http://localhost:"+port)
})