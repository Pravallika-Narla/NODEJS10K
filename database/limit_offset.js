var express=require("express")
var app=express()
var conn=require("./database.js")
app.get("/products",(req,res)=>{
var limit=req.query.limit??0;
var offset=req.query.offset??0;
console.log(limit,offset);
const query = "SELECT * FROM emp LIMIT ? OFFSET ?";
conn.query(query, [Number(limit), Number(offset)], (err, data) => {
        if(err){
            res.send({
                status:404,
                message:err.message
            })
        }
        else{
            res.send({
                status:200,
                message:data
            })
            
        }
    })
    
})

var port=3000;
app.listen(port,()=>{
    console.log("server started");
    
})