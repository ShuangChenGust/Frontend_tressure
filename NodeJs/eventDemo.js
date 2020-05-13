//event, eventhandler --fn()

var events = require('events')

var myEmitter = new events.EventEmitter();


myEmitter.on('click', function(msg){
    console.log(msg);
})

myEmitter.on('someEvent', function(msg){
    console.log(msg);
})

//raise the event by using emit fn
myEmitter.emit('someEvent', 'clicked')