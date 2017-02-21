var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(request, response){
    var path = url.parse(request.url).pathname;
    if(path.indexOf('favicon') != -1){
        return ;
    }

    fs.readFile( 'runoob/' + path.substr(1), function(err, data){
        if(err){
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }

        response.end();
    })

}).listen(6001);

console.log('Server running at http://192.168.232.161:6001');