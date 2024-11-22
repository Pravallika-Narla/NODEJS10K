var http = require("http");
var url = require("url")
var server = http.createServer((req, res) => {
  var url_data = url.parse(req.url,false);
  //console.log(url_data.query)
  var query_data = url_data.query.split("&");
  var query_obj ={}
  query_data.forEach(i =>{
    let each_query = i.split("=");
    query_obj[each_query[0]]=each_query[1];
  })
  console.log(query_obj);
  // var parsed_query = url.parse(req.url,true)
  // console.log(parsed_query.query)
   
  res.end("")
});

var port = 3002;
server.listen(port, () => {
  console.log("Server running at " + "http://localhost:" + port);
});