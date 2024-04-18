const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
      _db = client.db("FlightBooking");
      callback();
    })
    .catch((err) => console.log(err));
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
