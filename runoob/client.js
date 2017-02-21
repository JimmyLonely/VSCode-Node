var http = require('http');

var options = {
    host: '192.168.232.161',
    port: '6001',
    path: '/index.html'
};

var callback = function(response){
    var body = '';
    response.on('data', function(data){
        body+=data.toString();
    });

    response.on('end', function(){
        console.log('end');
        console.log(body);
    })
}


var request = http.request(options, callback);
request.end();

