var express = require('express')
var app = express();

// app.get('/', function(req,res){
//     res.send('helloworld');
// })

app.use(express.static(__dirname+"/public"));

app.listen(3000);
console.log("app is running in 3000")