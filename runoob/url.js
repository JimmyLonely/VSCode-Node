var http = require('http');
var url = require('url');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var urlParameters = url.parse(request.url, true);
    var queryParameters = urlParameters.query;
    response.write('name: ' + queryParameters.name);
    response.write('\n');
    response.write('age: ' + queryParameters.age);
    response.end();
}).listen(6001);