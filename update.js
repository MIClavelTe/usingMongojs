var mongojs = require('mongojs');

var connectString = 'createRestApi';
var collection = ['princesses'];

var db = mongojs(connectString, collection);

var input = process.argv.slice(2);

// db.princesses.update({name: input[0]}, {$set: {prince: input[1]}}, function(err, result) {
//     if (err) {
//         console.error(err);
//     }

//     console.log(result);
//     db.close();
// })

db.princesses.findAndModify({query: {name: input[0]}, update: {$set: {prince: input[1]}}}, function(err, result) {
    if (err) {
        console.error(err);
    }

    console.log(result);
    db.close();
});
