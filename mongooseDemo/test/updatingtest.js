const mongoose = require('mongoose')
const assert = require('assert');
const MarioChar = require('../models/mariochar')

describe('Updating Records', function(){
    var char;
    //add a character before the test
    beforeEach(function(done){
        char = new MarioChar({
            name:"Mario",
            weight:50
        });
        char.save().then(function(){
            done();
        });
    });
    //creat test
    it('Update a name record from db', function(done){
        MarioChar.findOneAndUpdate({name:'Mario'}, {name:"lugi"}).then(function(){
            MarioChar.findOne({_id:char._id}).then(function(result){
                assert(result.name === "lugi");                            
            });
            done();  
        });
    });
    //find a id
    it('Adds 1 to the weight of every document', function(done){
        MarioChar.updateOne({},{$inc:{weight:1}}).then(function(){
            MarioChar.findOne({name:"Mario"}).then(function(result){
                assert(result.weight === 51);
            
            });
            done();
        });
    });    
})


// validator:{
//             $and:[
//                     {
//                         "mobile":{$type:'string', $regex:/^[0-9]{2}-[0-9]{3}-[0-9]{4}$/}
//                     }                
//                  ]
//           }
// })