var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@13Feb2003",
  database:"practice"
});
con.connect((err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("connection established")
    }
});
module.exports=con