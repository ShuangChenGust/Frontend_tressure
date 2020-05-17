var express = require('express')
var app = express();

// app.get('/', function(req,res){
//     res.send('helloworld');
// })

app.use(express.static(__dirname+"/public"));

app.get('/contactlist', function(req,res){
    console.log('I receved a GET request')
})

app.listen(3000);
console.log("app is running in 3000")