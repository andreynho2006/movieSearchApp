var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res) {
    console.log(req.query.search);
    var searchTerm = req.query.search;
    //console.log(searchTerm);
    request('https://api.themoviedb.org/3/search/company?page=1&query="'+ searchTerm +'"a&api_key=7b50c3a83ecee9e0612aadff4bb3b634', function(error, respond, body) {
    if(!error && res.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("results", {data:data});
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie app has started");
});