import "./TicketDetails.css";
import { DomesticFlightsContext } from "../context/FlightDataDomestic";
import { CityContext } from "../context/CityContext";
import { AirportsContext } from "../context/AirportsContext";
import { useContext } from "react";
import siteLogo from "../img/icons8-flight-100.png";
const TicketDetails = (props) => {
  const ctx = useContext(CityContext);
  const Domestic = useContext(DomesticFlightsContext);
  const airport = useContext(AirportsContext);
  function convertTimeToDuration(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);

    const durationString = `${hours}h ${minutes}m`;

    return durationString;
  }
  const type = props.ticketType.toUpperCase().replace("_FARE", "");

  function formatDate(dateString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dateParts = dateString.split("-");
    const year = dateParts[0];
    const monthIndex = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const formattedDate = new Date(year, monthIndex, day);

    const dayOfWeek = days[formattedDate.getDay()];
    const dayOfMonth = formattedDate.getDate();
    const month = months[monthIndex];

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  }
  const index = props.index;
  const tempDetail = Domestic.DomesticFlights.filter(
    (data) => data.index === index
  );
  const cityObj = function (cityCodes) {
    const codes = cityCodes.find((data) => data.code === tempDetail[0].origin);
    return codes ? codes.city : "City not found";
  };
  const cityObj2 = function (cityCodes) {
    const codes = cityCodes.find(
      (data) => data.code === tempDetail[0].destination
    );
    return codes ? codes.city : "City not found";
  };
  const air = airport.Airports.find(
    (data) => data.code === tempDetail[0].origin
  );
  const air2 = airport.Airports.find(
    (data) => data.code === tempDetail[0].destination
  );

  return (
    <div className="container">
      <div className="cardWhole">
        {/* <div className="flightDetailsTicket">
          <h3>{tempDetail[0].airline}</h3>
          <h5>{tempDetail[0].flight_no}</h5>
        </div>
        <div className="depart">
          <h2>{tempDetail[0].depart_time.substring(0, 5)}</h2>
          <h4>{formatDate(props.departureDate)}</h4>
          <h4>{cityObj(ctx.allCities)}</h4>
          <h5>{air ? air.airport : "airport not found"}</h5>
        </div>
        <div className="timeDuration">
          <h4>{convertTimeToDuration(tempDetail[0].duration)}</h4>
          <hr />
        </div>
        <div className="reach">
          <h2>{tempDetail[0].arrival_time.substring(0, 5)}</h2>
          <h4>{formatDate(props.departureDate)}</h4>
          <h4>{cityObj2(ctx.allCities)}</h4>
          <h5>{air2 ? air2.airport : "airport not found"}</h5>
        </div> */}

        <div className="ticketDetailsInside">
          <div className="insideDetails1">
            <h1 className="detailsHeading">ONLINE FLIGHT BOOKING</h1>
            <h1 className="ticketType">{type} CLASS</h1>
          </div>
          <div className="level1">
            <div className="airlineName">
              <h4>AIRLINE</h4>
              <h3>{tempDetail[0].airline.toUpperCase()}</h3>
            </div>
            <div className="airlineCode">
              <h4>AIRLINE CODE</h4>
              <h3>{tempDetail[0].flight_no}</h3>
            </div>
            <div className="duration">
              <h4>DURATION</h4>
              <h3>{convertTimeToDuration(tempDetail[0].duration)}</h3>
            </div>
          </div>
          <div className="level2">
            <div className="departure">
              <h4>DEPARTURE</h4>
              <h3>{cityObj(ctx.allCities).toUpperCase()}</h3>
            </div>
            <div className="departureTime">
              <h4>DEP TIME</h4>
              <h3>{tempDetail[0].depart_time.substring(0, 5)}</h3>
            </div>
            <div className="departureDate">
              <h4>DEP DATE</h4>
              <h3>{formatDate(props.departureDate)}</h3>
            </div>
          </div>
          <div className="level3">
            <div className="arrival">
              <h4>ARRIVAL</h4>
              <h3>{cityObj2(ctx.allCities).toUpperCase()}</h3>
            </div>
            <div className="arrivalTime">
              <h4>ARV TIME</h4>
              <h3>{tempDetail[0].arrival_time.substring(0, 5)}</h3>
            </div>
            <div className="arrivalDate">
              <h4>ARV DATE</h4>
              <h3>{formatDate(props.departureDate)}</h3>
            </div>
          </div>
          <div className="level4">
            <div className="fromAirport">
              <h3>{air ? air.airport : "airport not found"}</h3>
            </div>
            <div className="toAirport">
              <h3>{air2 ? air2.airport : "airport not found"}</h3>
            </div>
          </div>
        </div>
        <div className="messageRandom">
          <h1 className="titleName">Online Flight Booking</h1>
          <img className="summaImage" src={siteLogo} alt="summa" />
          <p className="para1">THANK YOU FOR CHOOSING US.</p>
          <p className="para2">PLEASE BE AT THE GATE AT BOARDING TIME.</p>
        </div>
      </div>
      {/* <div className="unwanted">
        <p>30 kgs Check-in, 7 kgs Cabin</p>
      </div> */}
    </div>
  );
};
export default TicketDetails;
