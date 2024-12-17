
var express = require("express");
var fs = require("fs");
var app = express();
var cors = require("cors")
app.use(cors())
app.use(express.json());
// app.listen(3009);


// app.get("/home", (req, res) => {
//     fs.readFile("index.html", "utf-8", (err, data) => {
//         if (err) {
//             res.status(500).send("Error reading the file");
//         } else {
//             res.send(data);
//         }
//     });
// });

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send(req.body)
    
});
app.listen(3009,()=>{
    console.log("server started")
})  



