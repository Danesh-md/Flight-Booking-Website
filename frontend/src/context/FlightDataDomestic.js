import React, { useEffect, useState } from "react";
const DomesticFlightsContext = React.createContext({
  DomesticFlights: [],
});

const DomesticFlightsContextProvider = (props) => {
  const [DomesticFlights, setDomesticFlights] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/DomesticFlights", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        setDomesticFlights(data);
      })
    );
  }, []);
  return (
    <DomesticFlightsContext.Provider
      value={{ DomesticFlights: DomesticFlights }}
    >
      {props.children}
    </DomesticFlightsContext.Provider>
  );
};
export { DomesticFlightsContextProvider, DomesticFlightsContext };
