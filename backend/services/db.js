const mysql = require("mysql")

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"webappcloud"
})

con.connect((error)=>{
    if (error) throw error;
    console.log("connected")
})

module.exports=con

