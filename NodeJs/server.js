var http = require('http');
var fs = require('fs');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type':'text/html'});
    
//     var html = fs.readFileSync(__dirname+'/index.html', 'utf8')
//     var message = 'message for the template'
//     html = html.replace('(message)', message)

//     res.end(html);
// }).listen('3000','127.0.0.1')

http
    .createServer(function(req, res){
    if (req.url == '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url == "/api") {
        res.writeHead(200, {'Content-type':'text/json'});
    
        var obj = {
            firstName : "Mike",
            lastName : "colo",
        };
        res.end(JSON.stringify(obj));
    
    }else{
        res.writeHead(404);
        res.end();
    }


}).listen('3000','127.0.0.1')