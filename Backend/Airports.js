const getDb = require("./database").getDb;
const fetchAirports = () => {
  const db = getDb();
  return db
    .collection("Airports")
    .find()
    .toArray()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = fetchAirports;
