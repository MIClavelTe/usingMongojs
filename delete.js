var mongojs = require('mongojs');

var connectString = 'createRestApi';
var collection = ['princesses'];

var db = mongojs(connectString, collection);

var input = process.argv.slice(2);

if (input.length > 0) {
    db.princesses.remove({name: input[0]}, function() {
        console.log('You deleted ' + input[0])
    })
} else {
    db.princesses.drop(function() {
        console.log('Princesses deleted');
    });
}

db.close()