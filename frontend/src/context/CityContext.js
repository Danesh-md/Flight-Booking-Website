import React, { useEffect, useState } from "react";
const CityContext = React.createContext({
  allCities: [],
});

const CityContextProvider = (props) => {
  const [allCities, setAllCities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/CityCodes", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        setAllCities(data);
      })
    );
  }, []);
  return (
    <CityContext.Provider value={{ allCities: allCities }}>
      {props.children}
    </CityContext.Provider>
  );
};
export { CityContextProvider, CityContext };
