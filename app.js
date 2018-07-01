var express = require("express");
var app = express();
var request = require("request");


app.get("/results", function(req, res) {
     request('https://api.themoviedb.org/3/search/company?page=1&query=california&api_key=7b50c3a83ecee9e0612aadff4bb3b634', function(error, respond, body) {
     if(!error && res.statusCode == 200) {
         var parsebody = JSON.parse(body);
        res.send(parsebody.results[0].name);
        }
    });

})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie app has started");
});