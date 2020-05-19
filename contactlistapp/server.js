var express = require('express')
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname+"/public"));

app.get('/contactlist', function(req,res){
    console.log('I receved a GET request')

    db.contactlist.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    })

});

app.post('/contactlist', function(req,res){
    console.log(req.body)
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc);
    })
});
//you can also use other ID, like email, or id for deleting purpose.
app.delete('/contactlist/:id', function(req,res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    })
});

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);

    db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);

    })

})

app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(req.body.name);

        db.contactlist.findAndModify(
            {query:{_id:mongojs.ObjectId(id)},
            update:{$set:{name:req.body.name, email:req.body.email, phone:req.body.phone}},
            new:true},function(err, doc){

            res.json(doc);
    })
})

app.listen(3000);
console.log("app is running in 3000")