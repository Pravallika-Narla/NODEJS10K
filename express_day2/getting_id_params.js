var express = require("express");
var fs = require("fs");
var app = express();

var {filterr}=require("./filteration.js")

// htttp methods ->





app.get("/products", async (req, res) => {
  let response = await fetch("https://fakestoreapi.com/products");
  let result = await response.json();
  console.log(result);
  res.send(result);
});

app.get("/html", async (req, res) => {
  let response = await fetch("https://fakestoreapi.com/products");
  let result = await response.json();

  console.log(req.query);
  if (Object.keys(req.query).length > 0) {
    if (req.query.order == "a") {
      result.sort((a, b) => {
        return a.price - b.price;
      });

      res.send(result);
    } else if (req.query.order == "d") {
      result.sort((a, b) => {
        return b.price - a.price;
      });

      if (req.query.cat == "m") {
        // var filtereddata = result.filter((val, ind) => {
        //   return val.category == "men's clothing";
        // });

        var filtereddata=filterr("men's clothing",result)
        console.log(filtereddata);

        console.log(filterr,"hello");
        

        res.send(filtereddata);
      } else {
        
        var filtereddata=filterr("jewelery",result)
        console.log(filtereddata);
        console.log(filterr,"hello");
        res.send(filtereddata);
      }
    } else {
      res.send(result);
    }
  } else {
    res.send("provide a/d as an order");
  }
});

var port = 3000;
app.listen(port, () => {
  console.log("server started ");
});
