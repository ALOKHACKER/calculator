//jshint esversion:6
const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function (req,res){
    res.sendFile(__dirname + "/index.html");
    });

app.post("/",function(req,res){
    var n1=Number(req.body.n1);
    var n3=req.body.n3;
    var n2=Number(req.body.n2);
    var  result;
    switch(n3){
        case '+' :  result = n1+n2;
        break;
        case '-' :  result = n1-n2;
        break;
        case '*' :  result = n1*n2;
        break;
        case '/' :  result = n1/n2;
        break;
    }

    res.send("The result of the calculation is " + result);
});

app.listen(3000,function(){
    console.log("server is running on port 3000.");
});
