var express = require('express');
var app = express();

var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('public'));

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function(req, res){

    var response = {
        firstName: req.query.first_name,
        lastName: req.query.last_name
    }

    res.send(JSON.stringify(response));

});

app.post('/process_post',urlencodedParser, function(req, res){
    var response = {
        firstName: req.body.first_name,
        lastName: req.body.last_name
    }

    res.send(JSON.stringify(response));

});

var server = app.listen(6001, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
})