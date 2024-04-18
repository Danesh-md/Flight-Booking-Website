import Footer from "../layout/Footer";
import FlightDetailsHeader from "../components/FlightDetailsHeader";
import Header from "../layout/Header";
import Head from "../components/Head";
import { useLocation } from "react-router-dom";
import FilterAndSort from "../components/FilterAndSort";
import BottomNav from "../components/BottomNav";
import React, { useState } from "react";

const FlightsPage = () => {
  const [flightData, setFlightData] = useState({});
  const [isTicketSelected, setIsTicketSelected] = useState(false);
  const selectedFlight = (data) => {
    setFlightData(data);
    setIsTicketSelected(true);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <div>
      <Header />
      <FlightDetailsHeader
        fromPlace={queryParams.get("departureName")}
        toPlace={queryParams.get("arrivalName")}
        departureDate={queryParams.get("departureDate")}
        returnDate={queryParams.get("returnDate")}
        ticketClass={queryParams.get("ticketClass")}
      />
      <br></br>
      <Head />
      <FilterAndSort
        fromPlace={queryParams.get("departureName")}
        toPlace={queryParams.get("arrivalName")}
        ticketClass={queryParams.get("ticketClass")}
        departureDate={queryParams.get("departureDate")}
        upData={selectedFlight}
      />
      {isTicketSelected && (
        <BottomNav
          flight={flightData}
          ticketClass={queryParams.get("ticketClass")}
          departureDate={queryParams.get("departureDate")}
        />
      )}
      <Footer />
    </div>
  );
};
export default FlightsPage;
