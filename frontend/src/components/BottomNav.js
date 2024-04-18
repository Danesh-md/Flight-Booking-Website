import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./FlightsDetails.css";
import React from "react";
const BottomNav = (props) => {
  const fareKey = props.ticketClass.toLowerCase() + "_fare";
  const history = useHistory();
  const continueHandler = (e) => {
    e.preventDefault();
    history.push(
      `/review/?index=${props.flight.index}&departureDate=${props.departureDate}&type=${fareKey}`
    );
  };
  return (
    <div className="bottomNav">
      <div className="travellingFlight">
        <h2>
          {props.flight.origin} &rarr; {props.flight.destination} @ ₹
          {props.flight[fareKey]}
        </h2>
        <h3>
          {props.flight.flight_no}{" "}
          {props.flight.depart_time
            ? props.flight.depart_time.substring(0, 5)
            : "N/A"}{" "}
          .{" "}
          {props.flight.arrival_time
            ? props.flight.arrival_time.substring(0, 5)
            : "N/A"}
        </h3>
      </div>

      <div className="totalFare">
        <h2>Total Fare</h2>
        <h3>₹ {props.flight[fareKey]}</h3>
      </div>
      <div className="continue">
        <Link to="/review">
          <button className="continueBtn1" onClick={continueHandler}>
            Continue &rarr;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
