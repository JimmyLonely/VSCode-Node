var express = require('express');
var app = express();
var fs = require('fs');

// Hard code
var user_json = __dirname + "/" + "user.json"
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.get('/listUsers', function (req, res) {
    fs.readFile(user_json, function (err, data) {
        if (err) {
            return console.log(err);
        }

        console.log(data);
        res.end(data);
    })
})

app.get('/addUser', function (req, res) {
    fs.readFile(user_json, function (err, data) {
        if (err) {
            return console.log(err);
        }

        data = JSON.parse(data);
        data['user4'] = user['user4'];

        res.end(JSON.stringify(data));
    })

})

app.get('/deleteUser', function (req, res) {
    fs.readFile(user_json, function (err, data) {
        if (err) {
            return console.log(err);
        }

        data = JSON.parse(data);
        delete data['user' + '2'];

        res.end(JSON.stringify(data));
    })
})

app.get('/:id', function (req, res) {
    fs.readFile(user_json, function (err, data) {
        if (err) {
            return console.log(err);
        }

        data = JSON.parse(data);
        response = data['user' + req.params.id];

        res.end(JSON.stringify(response));
    })
})

var server = app.listen(6001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
})

