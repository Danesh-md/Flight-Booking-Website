import React, { useState } from "react";
import "./Passenger.css";
const PassengerForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Name:", name);
    console.log("Gender:", gender);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Passenger Details</h2>
      <p>
        You have not added any adults to the list
        <br />
        IMPORTANT: Enter your name as it is mentioned on your passport or any
        government approved ID.
      </p>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <button type="submit">+ ADD ADULT</button>
    </form>
  );
};

export default PassengerForm;
