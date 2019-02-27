var mongojs = require('mongojs');

var connectString = 'createRestApi';
var collection = ['princesses'];

var db = mongojs(connectString, collection);

// db.princesses.insert({name:'Sofia'}, function(error, result) {
//     if (error) {
//         console.error(error);
//     };

//     console.log(result);
// });

// db.princesses.insert({name:'Jasmine'}, function(error, result) {
//     if (error) {
//         console.error(error);
//     };

//     console.log(result);
// });

// db.princesses.insert({name:'Rapunzel'}, function(error, result) {
//     if (error) {
//         console.error(error);
//     };

//     console.log(result);
// });

// db.princesses.insert([
//     {
//         name: 'Ariel'
//     }, 
//     {
//         name: 'Aurora'
//     },
//     {
//         name: 'Belle'
//     }
// ], function(error, result) {
//     if (error) {
//         console.error(error);
//     };

//     console.log(result);
// });

var input = process.argv.slice(2);
if (input.length > 0) {
    db.princesses.insert({name: input[0]}, function(error, result) {
        if (error) {
            console.error(error);
        }

        console.log(result)
        db.close();
    })
}
