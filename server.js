var http = require('http');
var url = require('url');

function start(){
    function onRequest(request, response){

    };

    http.createServer(onRequest).listen(6001);

} 

exports.start = start; 