const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("This is the home page which is also the root route!")
});

//bmi-calculator page
app.get("/bmi-calculator", function(req, res){
    res.sendFile(__dirname + "/bmi-calculator.html")
});

//Retries information from the form in bmi-calculator.html, 
//does the calculation and displays same to the bmi-calculator page
app.post("/bmi-calculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmiResult = weight / (height * height);
    res.send("Your BMI result is: " +bmiResult);
});

app.listen(3000, function(){
    console.log("The server started at http://localhost:3000")
});