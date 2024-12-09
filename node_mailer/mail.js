var nodemailer = require("nodemailer");
var express = require("express")
var app = express();
var dotenv=require("dotenv")
dotenv.config()
var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com', //third party service or.. service: 'gmail',
    // service:'gmail',
    port:587,   //more secure
    secure:false, //optional
    auth:{
        user: 'pravallikanarla13@gmail.com',
        pass: 'mtdc gnjc zrwj qfdo'   //by clicking two factor authentication
    }
});
var options = {
    from: 'pravallikanarla13@gmail.com',
    to: 'narlapravallika13@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
app.get("/gmail",(req,res)=>{
    transporter.sendMail(options,(err,info)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(info)
        }
    })
    // res.send("hi this is mail")
})
var port = process.env.port;  //for sensitive information
app.listen(port,()=>{
    console.log("server started")
})
