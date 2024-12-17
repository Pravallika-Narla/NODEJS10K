// Import required modules
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const mysql = require("mysql2");
const otp = require("./otp"); // Custom OTP generator module

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});
const upload = multer({ storage });

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "pravallikanarla13@gmail.com",
        pass: "mtdc gnjc zrwj qfdo", // Use environment variables for production
    },
});

// Configure MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Replace with your MySQL username
    password: "password", // Replace with your MySQL password
    database: "hello",  // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    }
    console.log("Connected to the database.");
});

// Register route
app.post("/register", upload.single("file"), (req, res) => {
    const { name, password, email } = req.body;
    const file = req.file;

    // Hash the password
    const salt = 10;
    bcrypt.hash(password, salt, (err, hashedPassword) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).send({
                message: "Error hashing password",
                error: err,
            });
        }

        // Generate OTP
        const otpCode = otp();

        // Save user details in the database
        const query = "INSERT INTO user (name, email, password, otp, file_originalname, file_filename, file_path) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [
            name,
            email,
            hashedPassword,
            otpCode,
            file ? file.originalname : null,
            file ? file.filename : null,
            file ? file.path : null,
        ];

        db.query(query, values, (dbErr, result) => {
            if (dbErr) {
                console.error("Error saving user to database:", dbErr);
                return res.status(500).send({
                    message: "Error saving user to database",
                    error: dbErr,
                });
            }

            // Send OTP via email
            const mailOptions = {
                from: "pravallikanarla13@gmail.com",
                to: email,
                subject: "Your OTP for Registration",
                text: `Your OTP is: ${otpCode}`,
            };

            transporter.sendMail(mailOptions, (mailErr) => {
                if (mailErr) {
                    console.error("Error sending email:", mailErr);
                    return res.status(500).send({
                        message: "Failed to send OTP",
                        error: mailErr,
                    });
                }

                res.status(200).send({
                    message: "User registered successfully. OTP sent to email.",
                    userId: result.insertId, // Return the ID of the inserted user
                });
            });
        });
    });
});

// Start the server
app.listen(3009, () => {
    console.log("Server started on port 3009");
});
