const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const app = express();
const otp = require('./otp'); 
app.use(cors());
app.use(express.json());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});
const upload = multer({ storage });
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "pravallikanarla13@gmail.com",
        pass: "mtdc gnjc zrwj qfdo",
    },
});
app.post("/register", upload.single("file"), (req, res) => {
    const { name, password, email } = req.body;
    const file = req.file;
    const salt = 10;
    bcrypt.hash(password, salt, (err, hashedPassword) => {
        if (err) {
            return res.status(500).send({ 
                message: "Error hashing password", 
                error: err 
            });
        }
        // let query = "INSERT into user_info (username, password, email, profilepic) VALUES (?, ?, ?, ?)";
        //         conn.query(query, [username, hashedPassword, email, req.file.path], (err) => {
        //             if (err) {
        //                 return res.status(500).send({ status: 500, message: err.message });
        //             }
        const otpCode = otp();
        const upload = multer({ storage });
        const mailOptions = {
            from: "prvallikanarla13@gmail.com",
            to: email,
            subject: "Your OTP for Registration",
            text: `Your OTP is: ${otpCode}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500)
                res.send({ 
                    message: "Failed to send OTP", error
                   
                });
            } else {
                res.status(200)
                res.send({
                    username: name,
                    password: hashedPassword,
                    email,
                    otp: otpCode,
                    file: file ? {
                        originalname: file.originalname,
                        filename: file.filename,
                        path: file.path,
                    } : null,
                });
            }
        });
    });
});

app.listen(3009, () => {
    console.log("Server started on port 3009");
});
