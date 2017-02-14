var http = require('http');
var querystring = require('querystring');

var postHTML = 
  '<html><head><meta charset="utf-8"><title>Runoob Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  'name： <input name="name"><br>' +
  'age： <input name="age"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function(request, response){
    var body = '';
    request.on('data', function(chunk){
        body += chunk;
    });

    request.on('end', function(){
        body = querystring.parse(body);
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.age){
            response.write('name: ' + body.name);
            response.write('\n');
            response.write('age: ' + body.age);
        } else{
            response.write(postHTML);
        }
        response.end(); 
    });
}).listen(6001);