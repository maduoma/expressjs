const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//Home Page containing the simple-calculator
app.get("/", function(req, res){
    res.sendFile(__dirname +"/simple-calculator.html");
});
//Retries information from the form, 
//does the calculation and displays same to the Home Page
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is "+result);
});

//Server started on port 3001
app.listen(3000, function(){
    console.log("Server is running at http://localhost:3000");
});


