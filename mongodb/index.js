const MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/midatabase'

MongoClient.connect(url, function(err, db){
    if (err) throw err
    console.log('Database creada')
    db.close()
})
