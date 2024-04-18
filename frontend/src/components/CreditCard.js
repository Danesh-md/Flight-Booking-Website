import React, { useState } from "react";
import "./CreditCard.css"; // Import the CSS file
import pic from "../img/card.png";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const CreditCard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const total = queryParams.get("total");
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i < currentYear + 30; i++) {
    years.push(i);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardName":
        setCardName(value);
        break;
      case "expMonth":
        setExpiryMonth(value);
        break;
      case "expYear":
        setExpiryYear(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!cardNumber || cardNumber.length !== 16 || cardNumber.length < 16) {
      errors.cardNumber = "Invalid card number";
    }

    if (!cardName.trim()) {
      errors.cardName = "Cardholder's name is required";
    }
    if (!expiryMonth || !expiryYear) {
      errors.expiry = "Expiry date is required";
    } else {
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();
      if (
        parseInt(expiryYear, 10) === currentYear &&
        parseInt(expiryMonth, 10) < currentMonth
      ) {
        errors.expiry = "Expiry date should be in the future";
      }
    }
    if (!cvv || cvv.length !== 3) {
      errors.cvv = "Invalid CVV";
    }
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
    } else {
      setErrors(errors);
    }
    if (cardNumber && cardName && expiryMonth && expiryYear && cvv) {
      history.push("/downloadTicket");
    }
  };

  return (
    <div className="creditContainer">
      <div className="top">
        <h3>Payment Details</h3>
        <img src={pic} alt="pic" />
      </div>

      <div className="inputboxes">
        <form className="form2" onSubmit={handleSubmit}>
          <div className="paymentAmt">
            <label>PAYMENT AMOUNT</label>
            <input value={`₹ ${total}`} disabled />
          </div>
          <div className="cardNumber">
            <label>CARD NUMBER</label>
            <div className="insideCardNumber">
              <input
                type="number"
                name="cardNumber"
                placeholder="Enter Card Number"
                value={cardNumber}
                onChange={handleInputChange}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-credit-card"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                    />
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                  </svg>
                </span>
              </div>
              {errors.cardNumber && (
                <p className="error">{errors.cardNumber}</p>
              )}
            </div>
          </div>

          <div className="cardName">
            <label>CARD HOLDER'S NAME</label>
            <input
              type="text"
              name="cardName"
              placeholder="Enter Name"
              value={cardName}
              onChange={handleInputChange}
            />
            {errors.cardName && <p className="error">{errors.cardName}</p>}
          </div>
          <div className="bottom">
            <div className="expiry">
              <label>EXPIRY DATE</label>
              <div className="monthAndYear">
                <div className="month">
                  <select
                    name="expMonth"
                    required
                    value={expiryMonth}
                    onChange={handleInputChange}
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (month) => (
                        <option
                          key={month}
                          value={month.toString().padStart(2, "0")}
                        >
                          {month.toString().padStart(2, "0")}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="year">
                  <select
                    name="expYear"
                    id="expiry_year"
                    required
                    value={expiryYear}
                    onChange={handleInputChange}
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors.expiry && <p className="error">{errors.expiry}</p>}
            </div>
            <div className="cvv">
              <label>CVV</label>
              <input
                type="number"
                name="cvv"
                placeholder="CVV"
                value={cvv}
                onChange={handleInputChange}
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
            </div>
          </div>
          <div className="btnSub">
            <button type="submit">Make Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCard;
