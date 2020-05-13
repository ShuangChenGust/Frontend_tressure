var http = require('http');
var fs = require('fs')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'});

    var html = fs.readFileSync(__dirname+"/index.html", 'utf8')
    var message = 'message for the template'
    

    res.end("hello wprld");
}).listen('3000','127.0.0.1')