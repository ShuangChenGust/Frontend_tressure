var express = require('express')
var app = express()

var port = process.env.PORT || 300

app.get('/', function(req,res){
    res.send('<html><head>2<head><html>')
})
app.get('/api', function(req, res){
    res.json({firstName:'John'});
})

app.listen(port);