import React, { useReducer } from "react";
import axios from "axios";
import { DomesticFlightsContext } from "../context/FlightDataDomestic";
import { AirportsContext } from "../context/AirportsContext";
import { useContext } from "react";

import "./PassengerDetails.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialState = {
  passengerName: "",
  passengerGender: "Gender",
  phoneNumber: "",
  email: "",
  countryCode: "+1",
  emailError: "",
  phoneNumberError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.error };
    case "SET_PHONE_NUMBER_ERROR":
      return { ...state, phoneNumberError: action.error };
    default:
      return state;
  }
};

const PassengerDetails = (props) => {
  const Domestic = useContext(DomesticFlightsContext);
  const airport = useContext(AirportsContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const index = props.index;
  const tempDetail = Domestic.DomesticFlights.filter(
    (data) => data.index === index
  );
  const air = airport.Airports.find(
    (data) => data.code === tempDetail[0].origin
  );
  const air2 = airport.Airports.find(
    (data) => data.code === tempDetail[0].destination
  );

  const proceedHandler = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      try {
        await axios.post("http://localhost:3000/details", {
          name: state.passengerName,
          gender: state.passengerGender,
          phoneNumber: state.phoneNumber,
          countryCode: state.countryCode,
          email: state.email,
          totalFare: props.totalFare,
          classType: props.fareKey,
          departureDate: props.departureDate,
          flightDetails: tempDetail[0],
          airport1: air,
          airport2: air2,
        });
        history.push(`/book/?total=${props.totalFare}`);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });

    if (name === "email") {
      validateEmail(value);
    } else if (name === "phoneNumber") {
      validatePhoneNumber(value);
    }
  };

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    dispatch({
      type: "SET_EMAIL_ERROR",
      error: isValid ? "" : "Please enter a valid email address",
    });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const isValid = /^\d{10}$/.test(phoneNumber);
    dispatch({
      type: "SET_PHONE_NUMBER_ERROR",
      error: isValid ? "" : "Please enter a valid phone number",
    });
  };

  const isFormValid = () => {
    return (
      state.passengerName.trim() !== "" &&
      state.phoneNumber.trim() !== "" &&
      state.email.trim() !== "" &&
      state.emailError === "" &&
      state.phoneNumberError === ""
    );
  };

  return (
    <div className="passengerDetailBox">
      <div className="passengerDetails">
        <div>
          <label htmlFor="passengerName">Passenger Name:</label>
          <input
            type="text"
            id="passengerName"
            name="passengerName"
            value={state.passengerName}
            onChange={handleInputChange}
            placeholder="Enter passenger name"
            required
          />
        </div>
      </div>
      <div className="passengerDetails">
        <div>
          <label htmlFor="passengerGender">Passenger Gender:</label>
          <select
            id="passengerGender"
            name="passengerGender"
            value={state.passengerGender}
            onChange={handleInputChange}
            required
          >
            <option value="">Enter Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="contactDetails">
        <div className="inside1">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            required
          />
          {state.phoneNumberError && (
            <div className="error">{state.phoneNumberError}</div>
          )}
        </div>
        <div className="inside2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            required
          />
        </div>
        {state.emailError && <div className="error">{state.emailError}</div>}
        <div className="inside3">
          <label htmlFor="countryCode">Country Code:</label>
          <select
            id="countryCode"
            name="countryCode"
            value={state.countryCode}
            onChange={handleInputChange}
            required
          >
            <option value="+1">+1 (United States)</option>
            <option value="+44">+44 (United Kingdom)</option>
            <option value="+91">+91 (India)</option>
          </select>
        </div>
        <div className="inside4">
          <button
            className="btn"
            type="button"
            disabled={!isFormValid()}
            onClick={proceedHandler}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
