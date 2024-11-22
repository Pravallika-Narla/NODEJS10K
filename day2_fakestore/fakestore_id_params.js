var http = require("http")
var url = require("url")

var server = http.createServer(async(req,res)=>{
    let data = await fetch("https://fakestoreapi.com/products")
    let fake_data = await data.json();

    var url_data = url.parse(req.url,true)
    var query_data = url_data.query
    var new_query={
        M:"men's clothing",
        W:"women's clothing",
        E:"electronics",
        J:"jewelery"
    }
    console.log(query_data)
    if(new_query[query_data.cat] && query_data.ord){
        var filter_data = fake_data.filter((i)=>{
            return i.category == new_query[query_data.cat];
      }) 
      if(query_data.ord=='ASC'){
        filter_data.sort((a,b)=>a.price-b.price)
      }else if(query_data.ord=='DESC'){
        filter_data.sort((a,b)=>b.price-a.price)
      }
      res.write(JSON.stringify(filter_data))
    }else{
        res.write("Documentation \nTo send catergory \n\t query should be '' cat = x ''\n\t x should be\n\t\t'M' for men's clothing \n\t\t'W' for women's clothing \n\t\t'E' for electronics \n\t\t'J' for jewelery \n\n\nTo get data in order according to price\n\t query should be '' ord = x ''\n\t x should be\n\t\t'ASC' for asceding order\n\t\t'DESC' for descending order  ")
    }
    res.end("")
    

})
var port = 3001
server.listen(port,()=>{
    console.log("server is running at "+"http://localhost:"+port)
})