var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/Mydb", function (err, db) {
    
    db.collection('snacks', function (err, collection) {
        
        
    });