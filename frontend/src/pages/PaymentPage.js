import React, { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import TicketDetails from "../components/TicketDetails";
import FeeAndSur from "../components/FeeAndSur";
import "./PaymentPage.css";
import CouponCode from "../layout/CouponCode";
import PassengerDetails from "../components/PassengerDetails";

const PaymentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [totalFare, setTotalFare] = useState(0);

  const updateTotalFare = (fare) => {
    setTotalFare(fare);
  };

  return (
    <div>
      <div className="payment">
        <Header />
        <div className="flexbox">
          <TicketDetails
            index={queryParams.get("index")}
            departureDate={queryParams.get("departureDate")}
            ticketType={queryParams.get("type")}
          />
          <div className="otherOne">
            <FeeAndSur
              index={queryParams.get("index")}
              fareKey={queryParams.get("type")}
              updateTotalFare={updateTotalFare}
            />
            <CouponCode />
          </div>
        </div>
        <PassengerDetails
          totalFare={totalFare}
          fareKey={queryParams.get("type")}
          index={queryParams.get("index")}
          departureDate={queryParams.get("departureDate")}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
