import "./FlightsDetails.css";
import flightIcon from "../img/flight_icon.png";
import { CityContext } from "../context/CityContext";
import { useContext } from "react";
const FlightTicket = (props) => {
  const ctx = useContext(CityContext);
  const RadioHandler = () => {
    props.upData(props.flightData);
  };
  const fareKey = props.ticketClass.toLowerCase() + "_fare";
  const fareValue = props.flightData[fareKey];

  const formattedFare =
    typeof fareValue === "number" ? fareValue.toFixed(1) : fareValue;

  return (
    <div className="flightContainer">
      <div className="flightCompanyAndImage">
        <img src={flightIcon} alt="" />
        <div className="flightCompany">
          <h3 className="flightName">{props.flightData.airline}</h3>
          <h4 className="flightNumber">{props.flightData.flight_no}</h4>
        </div>
      </div>
      <div className="depTime">
        <h3 className="departTime">
          {props.flightData.depart_time
            ? props.flightData.depart_time.substring(0, 5)
            : "N/A"}
        </h3>
        <h4 className="place">
          {ctx.allCities.find((data) => data.code === props.flightData.origin)
            ? ctx.allCities.find(
                (data) => data.code === props.flightData.origin
              ).city
            : "City not found"}
        </h4>
      </div>
      <div className="separator">
        <h1>-</h1>
      </div>
      <div className="arivTime">
        <h3 className="arrivalTime">
          {props.flightData.arrival_time
            ? props.flightData.arrival_time.substring(0, 5)
            : "N/A"}
        </h3>
        <h4 className="place">
          {ctx.allCities.find(
            (data) => data.code === props.flightData.destination
          )
            ? ctx.allCities.find(
                (data) => data.code === props.flightData.destination
              ).city
            : "City not found"}
        </h4>
      </div>
      <h3 className="price">₹ {formattedFare}</h3>
      <input type="radio" name="book" value="Booked" onClick={RadioHandler} />
    </div>
  );
};

export default FlightTicket;
