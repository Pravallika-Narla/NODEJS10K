var express= require("express")
var app = express()
// app.get("/products",async(req,res)=>{
//     let response = await fetch("https://fakestoreapi.com/products")
//     let result = await response.json()
//     res.send(result)
// });
// app.get("/html",(req,res)=>{               only query
//     res.send(req.query)
// });
// port = 3000
// app.listen(port,()=>{
//     console.log("server started")
// })

app.get("/html/:id",(req,res)=>{
    res.send({
        params:req.params,
        query:req.query
    })
})
port = 3000
app.listen(port,()=>{
    console.log("server started")
})
