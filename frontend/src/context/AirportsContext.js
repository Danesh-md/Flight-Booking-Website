import React, { useEffect, useState } from "react";
const AirportsContext = React.createContext({
  Airports: [],
});

const AirportsContextProvider = (props) => {
  const [Airports, setAirports] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Airports", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        setAirports(data);
      })
    );
  }, []);
  return (
    <AirportsContext.Provider value={{ Airports: Airports }}>
      {props.children}
    </AirportsContext.Provider>
  );
};
export { AirportsContextProvider, AirportsContext };
