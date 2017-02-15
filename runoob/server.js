var http = require('http');
var url = require('url');


http.createServer(function(request, response){
    var path = url.parse(request.url).pathname;

}).listen(6001);

console.log('Server running at http://192.168.232.161:6001');