const mongoose = require("mongoose")

//Coonect to MongoDB

mongoose.connect('mongodb://localhost/APRdb');
mongoose.connection.once('open',function(){
    console.log('connection has been established')
}).on("error", function(error){
    console.log("connection error", error);
});

// //Drop the coolection before each test
// beforeEach(function(done){
//     mongoose.connection.collection.mariochars.drop(function(){
//         done();
//     })
// })