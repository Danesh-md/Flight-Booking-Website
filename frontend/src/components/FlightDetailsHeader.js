import classes from "./FlightDetailsHeader.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CityContext } from "../context/CityContext";
const FlightDetailsHeader = (props) => {
  const codeCtx = useContext(CityContext);

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
  function getCityNameFromCode(code, cityCodes) {
    const cityObj = cityCodes.find((city) => city.code === code);

    return cityObj ? cityObj.city : "City not found";
  }
  return (
    <div className={classes["container2"]}>
      <div className={classes["insideCon2-1"]}>
        <div className={classes["insideCon2-1-1"]}>
          <h5>From</h5>
          <h3 className={classes["fromPlace"]}>
            {getCityNameFromCode(props.fromPlace, codeCtx.allCities)}({props.fromPlace})
          </h3>
        </div>
        <div className={classes["insideCon2-1-2"]}>
          <h2>&rarr;</h2>
        </div>
        <div className={classes["insideCon2-1-3"]}>
          <h5>To</h5>
          <h3 className={classes["toPlace"]}>
            {getCityNameFromCode(props.toPlace, codeCtx.allCities)} ({props.toPlace})
          </h3>
        </div>
      </div>
      <div className={classes["insideCon2-2"]}>
        <div className={classes["insideCon2-2-1"]}>
          <h5>Depart</h5>
          <h3 className={classes["departTime"]}>
            {formatDate(props.departureDate)}
          </h3>
        </div>
      </div>
      <div className={classes["insideCon2-3"]}>
        <h5>Class</h5>
        <h3 className={classes["class"]}>{props.ticketClass}</h3>
      </div>
      <div className={classes["insideCon2-4"]}>
        <Link to="/">
          <button className={classes["backButton"]}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default FlightDetailsHeader;
