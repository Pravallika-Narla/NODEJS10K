var express=require("express");

var app=express();

var fs=require("fs");

var cors=require("cors");


app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}));



app.post("/data",(req,res)=>{


    console.log(req.body);
    
    res.send(req.body);

})


app.get("/product",(req,res)=>{


    fs.readFile("./index1.json","utf-8",(err,data)=>{


        if(err){
            res.status(200)
            res.send(err.message);
        }else{
            res.set("Custom-Header","wjdvdfvhwhcshbquwiudh")
            res.status(700)
            res.send(data)
        }

    })


})


var port =3007;

app.listen(port,()=>{
console.log("server has been started ");


})