import morning_inactive from "../img/morning_inactive.png";
import noon_inactive from "../img/noon_inactive.png";
import evening_inactive from "../img/evening_inactive.png";
import night_inactive from "../img/night_inactive.png";
import morning_active from "../img/morning_active.png";
import noon_active from "../img/noon_active.png";
import evening_active from "../img/evening_active.png";
import night_active from "../img/night_active.png";

import React, { useState } from "react";
import "./FlightsDetails.css"; // Assuming you have CSS styles in a file named 'FlightsDetails.css'

const Filter = () => {
  const [departureTime, setDepartureTime] = useState("");

  const handleReset = () => {
    setDepartureTime("");
  };

  const handleDepartureTimeClick = (time) => {
    setDepartureTime(time);
  };

  return (
    <div className="filterContent">
      <div className="departureTime">
        <h3 className="text1">Departure Time</h3>
        <div className="departureImages">
          <div
            className={`morning pic ${
              departureTime === "morning" ? "active" : ""
            }`}
            onClick={() => handleDepartureTimeClick("morning")}
          >
            <img
              src={
                departureTime === "morning" ? morning_active : morning_inactive
              }
              alt=""
            />
            <h6>Before 6 AM</h6>
          </div>
          <div
            className={`noon pic ${departureTime === "noon" ? "active" : ""}`}
            onClick={() => handleDepartureTimeClick("noon")}
          >
            <img
              src={departureTime === "noon" ? noon_active : noon_inactive}
              alt=""
            />
            <h6>6 AM - 12 PM</h6>
          </div>
          <div
            className={`evening pic ${
              departureTime === "evening" ? "active" : ""
            }`}
            onClick={() => handleDepartureTimeClick("evening")}
          >
            <img
              src={
                departureTime === "evening" ? evening_active : evening_inactive
              }
              alt=""
            />
            <h6>12 PM - 18 PM</h6>
          </div>
          <div
            className={`night pic ${departureTime === "night" ? "active" : ""}`}
            onClick={() => handleDepartureTimeClick("night")}
          >
            <img
              src={departureTime === "night" ? night_active : night_inactive}
              alt=""
            />
            <h6>After 18 PM</h6>
          </div>
        </div>
      </div>
      <div className="filterBtn">
        <button className="resetBtn" type="button" onClick={handleReset}>
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
