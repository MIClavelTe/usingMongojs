var mongojs = require('mongojs');

var connectString = 'createRestApi';
var collection = ['princesses'];

var db = mongojs(connectString, collection);

db.princesses.findOne({name: 'Sofia'}, function (err, doc) {
	if (err) {
        console.log(err);
    }
    console.log("findOne({name: 'Sofia'}")
    console.log(doc);
});

db.princesses.findOne({name: 'Jasmine'}, function (err, doc) {
	if (err) {
        console.log(err);
    }

    console.log("findOne({name: 'Jasmine'}")
    console.log(doc);
});

db.princesses.findOne({name: 'Rapunzel'}, function (err, doc) {
	if (err) {
        console.log(err);
    }

    console.log("findOne({name: 'Rapunzel'}")
    console.log(doc);
});

// db.princesses.find({}, function(err, docs) {
db.princesses.find(function(err, docs) {
    if (err) {
        console.error(err);
    }

    console.log("find({}")
    console.log(docs)
})

//Get Jasmine and Rapunzel
db.princesses.find({
    name: { $in: ['Jasmine', 'Rapunzel'] }
}, function(err, docs) {
    if (err) {
        console.error(err);
    }

    console.log("find({name: { $in: ['Jasmine', 'Rapunzel'] }}")
    console.log(docs);
    db.close()
});