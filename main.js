var http = require('http');
var url = require('url');

http.createServer(onRequest).listen(6001);

function onRequest(request, response){
    var pathName = url.parse(request.url).pathname;
    console.log(request.url + ' path name: ' + pathName);

    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
};

console.log("Server running in http://192.168.232.161:6001");