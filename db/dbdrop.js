// run node dbscript.js to push the data to the db

var db = require('./connection.js');

db.books.drop( function(err) {
    if (err) {
        console.error(new Error(err));
    } else {
        console.log('Drop books!');
    }
    db.close();
});
