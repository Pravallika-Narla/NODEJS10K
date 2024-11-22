var http = require("http");

var server = http.createServer((req, res) => {
  var body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    console.log(JSON.parse(body));
    res.write(body)
    
  res.end();
  });

});
var port = 3006;
server.listen(port, () => {
  console.log("server running");
});