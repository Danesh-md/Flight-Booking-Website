const getDb = require("./database").getDb;
const fetchDomestic = () => {
  const db = getDb();
  return db
    .collection("DomesticFlights")
    .find()
    .toArray()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = fetchDomestic;
