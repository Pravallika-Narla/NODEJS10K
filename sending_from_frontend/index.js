var express = require("express")
var app = express()
app.listen(3009)
app.use(express.json())
app.get("/home",(req,res)=>{
    res.sendFile("index.html",{ root: __dirname})
})
app.post("/contact",(req,res)=>{
    console.log(req.body)
})

// var express = require("express");
// var app = express();

// // Start the server
// app.listen(3009, () => console.log("Server running on http://localhost:3009"));

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Serve the index.html file
// app.get("/home", (req, res) => {
//   res.sendFile("index.html", { root: __dirname + "/sending_from_frontend" });
// });

// // Handle POST request to /contact
// app.post("/contact", (req, res) => {
//   console.log("Received data:", req.body); // Logs the request body to the console
//   res.json({ status: "Data received", data: req.body }); // Sends a response back to the frontend
// });

