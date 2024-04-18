
const getDb = require("./database").getDb;
const fetchAll = () => {
  const db = getDb();
  return db
    .collection("CityCodes")
    .find()
    .toArray()
    .then((cities) => {
      return cities;
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = fetchAll;
