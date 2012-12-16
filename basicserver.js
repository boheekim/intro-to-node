var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request,response) {
    //handle request
    var path = url.parse(request.url).pathname;
    path = '.' + path;
    
    getFile(path, function(err, response) {
    response.writeHead(body.statusCode, {
        'Content-Length': body.length,
        'Content-Type': 'text/html; '})
    response.end(response.body, 'uft-8');    
    });
    

    
    
    
    
    
    console.log('got request');
}).listen(process.env.PORT);

function getFile(path, callback) {
    fs.readFile(path, function (err, data){
        if (err) {
            response.statusCode = 500;
            response.body = 'There was an error: ' + err;
            console.log(err);
        } else if (path == 'EN0ENT') {
            response.statusCode = 404;
            response.body = 'File not found';
            console.log(err);
        } 
        
        else {
            response.statusCode = 200;
            response.body = data.toString();
        }
        response.length = response.body.length;
        callback(err,response);
    });
    
 
    
}

