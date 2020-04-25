const express = require("express");
const app = express();

//Home Page
app.get("/", function(req, res){
    res.send("<h1>This is the root route like localhost:3000.</h1>");
});

//Contact Page
app.get("/contact", function(req, res){
    res.send("<h>This is the contact route.</h>");
});

//Hobbies Page
app.get("/hobbies", function(req, res){
    res.send("This is the hobbies route: <ul><li>Reading</li><li>Programming</li><li>Researching</li></ul>");
});

//About Page
app.get("/about", function(req, res){
    res.send("I am Maduabughichi Achilefu. I love programming.");
});

//Blog Page
app.get("/blog", function(req, res){
    res.send("This is my blog.");
});

app.listen(3000, function(){
    console.log("Server is running at http://localhost:3000");
})