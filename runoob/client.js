var http = require('http');

var options = {
    host: 'www.baidu.com'
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

