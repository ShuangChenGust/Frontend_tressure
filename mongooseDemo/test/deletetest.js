// const mongoose = require('mongoose')
// const assert = require('assert');
// const MarioChar = require('../models/mariochar')

// describe('Deleting Records', function(){
//     var char;
//     //add a character before the test
//     beforeEach(function(done){
//         char = new MarioChar({
//             name:"fei",
//             weight:50
//         });
//         char.save().then(function(){
//             done();
//         });
//         MarioChar.findByIdAndRemove({name:'fei'}).then(function(){
//             done();
//         });
//     });
//     //creat test
//     it('delete a record from db', function(done){
//         // MarioChar.findByIdAndRemove({name:'Mario'}).then(function(){
//         MarioChar.findOne({name:'fei'}).then(function(result){
//             assert(result === null);                            
            
//         });           
//         // });
//         done();
//     });
// })
//     // it('find a record from db by unique ID', function(done){
//     //     MarioChar.findOne({_id:char._id}).then(function(result){
//     //         assert(result._id.toString()  === char._id.toString());
            
//     //     });
//     //     done();
//     // });    