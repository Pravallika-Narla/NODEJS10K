var express = require("express");
var fs = require("fs");
var app = express();

// htttp methods ->

app.get("/products", async (req, res) => {
  let response = await fetch("https://fakestoreapi.com/products");
  let result = await response.json();
  console.log(result);
  res.send(result);
});

app.post("/html", (req, res) => {
  fs.readFile("./express_js/index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
      res.send(err.message);
    } else {
      res.send(data);
    }
  });
});

var port = 3000;
app.listen(port, () => {
  console.log("server started ");
});