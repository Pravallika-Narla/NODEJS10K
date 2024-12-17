var express = require("express");
var bcrypt = require("bcrypt");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
    const salt = 10; 
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 
    res.status(200).send(hashedPassword); 
});

app.listen(3009, () => {
    console.log("Server started on port 3009");
});
