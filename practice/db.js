var mysql=require("mysql2");
var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@13Feb2003",
    database:"hello"
});
conn.connect((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("connection established");
    }
})
module.exports=conn;