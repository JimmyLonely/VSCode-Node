var express = require('express');

var app = express();

app.get('/',function(request,response){
    response.send('Home page [GET].');
});

app.post('/', function(request,response){
    response.send('Home page [POST].');
})

app.get('/list_user', function(request,response){
    response.send('List_user.');
})

app.get('/del_user', function(request,response){
    response.send('Delete user.');
})

app.get('/*jimmy*', function(request, response){
    response.send('jimmy\' router');
});

var server = app.listen(6001, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('URL addess: http://%s:%s', host,port);
});