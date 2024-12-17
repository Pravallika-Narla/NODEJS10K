var express=require("express");
var app=express();
var bcrypt=require("bcrypt");
var multer=require("multer");
app.use(express.json());
var otp=require("./otp.js");
var conn=require("./database.js");
app.use(express.urlencoded({extended:true}));
var nodemailer=require("nodemailer");
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname+"/images");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
})
var upload=multer({storage:storage});
app.post("/data", upload.single("file"), async (req, res) => {
    try {
        const { username, password, confirmpassword, email } = req.body;
        if (!username || !password || !email || !req.file) {
            return res.status(400).send("All fields are required");
        }
        if (password !== confirmpassword) {
            return res.status(400).send("Passwords do not match");
        }
        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        let query = "INSERT into user_info (username, password, email, profilepic) VALUES (?, ?, ?, ?)";
        conn.query(query, [username, hashedPassword, email, req.file.path], (err) => {
            if (err) {
                return res.status(500).send({ status: 500, message: err.message });
            }

        
          var  email=req.body.email;
    var transport=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"pravallikanarla13@gmail.com",
            pass:"mtdc gnjc zrwj qfdo"
        }
    });
    var options={
        from:"pravallikanarla13@gmail.com",
        to:email,
        subject:'sending email using node.js',
        text:`This is otp ${otp(4)}`
    };
            transport.sendMail(options, (err, info) => {
                if (err) {
                    return res.status(500).send({ status: 500, message: "Email failed: " + err.message });
                }
                res.status(200).send({ status: 200, message: "User registered and email sent", info });
            });
        });
    } catch (err) {
        res.status(500).send({ status: 500, message: err.message });
    }
});
port=3890
app.listen(port,()=>{
    console.log("server started"+" http://localhost:"+port);
})