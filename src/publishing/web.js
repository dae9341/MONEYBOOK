var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('main.ejs');
});

app.listen(3000, function(){
    console.log("server start on port 3000");
});