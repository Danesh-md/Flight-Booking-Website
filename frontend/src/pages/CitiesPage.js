import { useState } from "react";
import { useContext } from "react";
import background from "../img/plane3.12.jpg";
import "./CityPage.css";
import { CityContext } from "../context/CityContext";
const CitiesPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [code, setCode] = useState("");

  const codeCtx = useContext(CityContext);

  const handleCitySelect = (event) => {
    setSelectedCity(event.target.value);
  };

  const codeHandler = (cityCodes) => {
    const selectedCityObj = cityCodes.find(
      (cityObj) => cityObj.city === selectedCity
    );

    if (selectedCityObj) {
      setCode(selectedCityObj.code);
    }
  };

  return (
    <div>
      <img src={background} alt="cities codes" className="backgroundImage" />
      <div className="backGround3">
        <div className="formCity">
          <label>Select City:</label>
          <select
            value={selectedCity}
            onChange={handleCitySelect}
            className="cityInput"
          >
            <option value="">Select a city</option>
            {codeCtx.allCities.map((cityObj, index) => (
              <option key={index} value={cityObj.city}>
                {cityObj.city}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="codeButton"
            onClick={() => {
              codeHandler(codeCtx.allCities);
            }}
          >
            GET CODE
          </button>
        </div>
        <div className="answerBox">
          <h1 className="answer">{code}</h1>
        </div>
      </div>
    </div>
  );
};

export default CitiesPage;
