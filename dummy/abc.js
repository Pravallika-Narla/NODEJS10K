var express= require("express")
var app = express()
app.get("/products",async(req,res)=>{

        let response = await fetch(" https://dummyjson.com/posts")
        let result = await response.json()
       res.send(result)
    });

    port = 3000
    app.listen(port,()=>{
        console.log("server started")
    })    