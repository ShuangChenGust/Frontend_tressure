// const mongoose = require('mongoose')
// const assert = require('assert');
// const MarioChar = require('../models/mariochar')

// describe('Finding Records', function(){
//     var char;
//     //add a character before the test
//     beforeEach(function(done){
//         char = new MarioChar({
//             name:"Mario"
//         });
//         char.save().then(function(){
//             done();
//         });
//     });
//     //creat test
//     it('find a record from db', function(done){
//         MarioChar.findOne({name:"Mario"}).then(function(result){
//             assert(result.name === "Mario");
//             done();
//         });
//     });
//     //find a id
//     it('find a record from db by unique ID', function(done){
//         MarioChar.findOne({_id:char._id}).then(function(result){
//             assert(result._id.toString()  === char._id.toString());
//             done();
//         });
//     });    
// })