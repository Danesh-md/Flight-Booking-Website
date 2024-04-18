import "./FlightsDetails.css";
import Filter from "../components/Filter";
import SortTicket from "../components/SortTicket";
import FlightTicket from "../components/FlightTicket";
import { DomesticFlightsContext } from "../context/FlightDataDomestic";
import { useContext } from "react";
const FilterAndSort = (props) => {
  const Domestic = useContext(DomesticFlightsContext);

  const { fromPlace, toPlace, ticketClass, departureDate } = props;
  const getWeekDay = (date) => {
    const parts = date.split("-");
    const day = parseInt(parts[2]);
    const year = parts[0];
    const monthIndex = parseInt(parts[1]) - 1;
    const format = new Date(year, monthIndex, day);
    const dayOfWeek = format.getDay();
    return dayOfWeek;
  };
  const getFlightData = (data) => {
    props.upData(data);
  };
  const filteredFlights = Domestic.DomesticFlights.filter((data) => {
    const fareKey = ticketClass.toLowerCase() + "_fare";

    return (
      data[fareKey] !== "" &&
      data.origin === fromPlace &&
      data.destination === toPlace &&
      data.depart_weekday === String(getWeekDay(departureDate))
    );
  });
  return (
    <div className="filterBody">
      <Filter />
      <SortTicket>
        {filteredFlights.map((data) => {
          return (
            <FlightTicket
              key={data.index}
              flightData={data}
              ticketClass={ticketClass}
              upData={getFlightData}
            />
          );
        })}
      </SortTicket>
    </div>
  );
};

export default FilterAndSort;
