import React from "react";
import "./FeeAndSur.css";
import { DomesticFlightsContext } from "../context/FlightDataDomestic";
import { useContext } from "react";
const FeeAndSur = (props) => {
  const Domestic = useContext(DomesticFlightsContext);
  const index = props.index;
  const fareType = props.fareKey;
  const tempDetail2 = Domestic.DomesticFlights.filter(
    (data) => data.index === index
  );

  const updateTotalFare = () => {
    const baseFare = Number(tempDetail2[0][fareType]);
    const feesAndSurcharges = 100;
    const totalFare = baseFare + feesAndSurcharges;

    props.updateTotalFare(totalFare);
  };

  React.useEffect(() => {
    updateTotalFare();
  });

  return (
    <div className="fareSummaryContainer">
      <div className="fareSummaryTitle">Fare Summary</div>
      <br />

      <div className="fareItem">
        <span className="fareItemLabel">Base Fare:</span>
        <span className="fareItemValue">₹ {tempDetail2[0][fareType]}</span>
      </div>
      <div className="fareItem">
        <span className="fareItemLabel">Fees and Surcharges:</span>
        <span className="fareItemValue">₹ 100</span>
      </div>
      <div className="fareItem">
        <span className="fareItemLabel">Total Fare:</span>
        <span className="fareItemValue">
          ₹ {Number(tempDetail2[0][fareType]) + 100}
        </span>
      </div>
    </div>
  );
};

export default FeeAndSur;
