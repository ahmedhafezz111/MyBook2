const mysql=require("mysql");
const express=require("express");
//const bodyparser=require("body-parser");
//const encoder=bodyparser.urlencoded();


const app=express();
app.use("/proStyle",express.static("proStyle"));

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "ahmed1582002hafez",
    database: "mybook"
});
connection.connect(function(error){
if (error) throw error
else console.log("connected to database successfully!")
});


app.get("/",function(req,res){

    res.sendFile(__dirname+"/pro.html");
})

app.post("/",encoder,function(req,res){
    var email=req.body.email;
    var password=req.body.password;
connection.query("select * from users where emai = ? and password = ? ",[email,password] ,function(error,results,fields){
if(results.length>0){
    res.redirect("/page2.html");

}else{
    res.redirect("/");
}
res.end();
})
})
app.get("/page2",function(req,res){
res.sendFile(__dirname+"/page2.html");
})

app.listen(7000);