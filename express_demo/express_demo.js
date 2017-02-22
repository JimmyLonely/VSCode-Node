var fs = require('fs');
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var multer = require('multer');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));

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

app.post('/process_post', function(req, res){
    var response = {
        firstName: req.body.first_name,
        lastName: req.body.last_name
    }

    res.send(JSON.stringify(response));

});

app.post('/file_upload', function(req, res){

    var upload_file = req.files[0];
    var des_file = __dirname + '/' + upload_file.originalname;

    fs.readFile(upload_file.path, function(err, data){
        if(err){
            return console.log(err);
        }

        fs.writeFile(des_file, data, function(err){
            if(err){
                return console.log(err);   
            } else  {
                response = {
                    message: 'File upload successfully!',
                    filename: upload_file.originalname
                }
            }

            //console.log(response);
            res.send(JSON.stringify(response));
        })
    })
});

var server = app.listen(6001, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
})