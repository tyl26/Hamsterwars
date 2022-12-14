
//connectar med min mongondb med lösen 
const {
    MongoClient
} = require('mongodb')
const DB = process.env.ATLAS_URI;

const client = new MongoClient(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


let _db;

//hämtar databasen och exporterar min connection
module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (db) {
                _db = db.db('Hamsters');
                console.log('yay gick bra!');
            }
            return callback(err)
        })
    },
    getDb: function () {
        return _db
    }
}