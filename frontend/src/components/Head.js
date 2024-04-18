import "./FlightsDetails.css";
const head = () => {
  return (
    <div className="flights">
      <div className="filter">
        <h3>Filter Results</h3>
      </div>
      <div className="flightDetails">
        <h3 className="sort">Sort By</h3>
        <h3 className="departHead">Depart</h3>
        <h3 className="arriveHead">Arrive</h3>
        <h3>Price</h3>
        <h3>Book</h3>
      </div>
    </div>
  );
};

export default head;
