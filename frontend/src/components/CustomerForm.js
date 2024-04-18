import { useReducer } from "react";
import { useHistory } from "react-router-dom";
import backgroundFormImage from "../img/plane3.12.jpg";
import classes from "./CustomerForm.module.css";
const INITIAL_STATE = {
  from: "",
  to: "",
  departureDate: "",
  classType: "Economy",
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "FROM_INPUT":
      return { ...state, from: action.payload };
    case "TO_INPUT":
      return { ...state, to: action.payload };
    case "DEPARTURE_DATE_INPUT":
      return { ...state, departureDate: action.payload };

    case "CLASS_INPUT":
      return { ...state, classType: action.payload };
    default:
      return state;
  }
};
const CustomerForm = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const history = useHistory();
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (state.from && state.to && state.departureDate) {
      history.push(
        `/flights/?departureName=${state.from}&arrivalName=${state.to}&departureDate=${state.departureDate}&ticketClass=${state.classType}`
      );
    }
  };
  const FromHandler = (e) => {
    dispatch({ type: "FROM_INPUT", payload: e.target.value });
  };
  const ToHandler = (e) => {
    dispatch({ type: "TO_INPUT", payload: e.target.value });
  };
  const DepartureDateHandler = (e) => {
    dispatch({ type: "DEPARTURE_DATE_INPUT", payload: e.target.value });
  };
  const ClassSelectHandler = (e) => {
    dispatch({ type: "CLASS_INPUT", payload: e.target.value });
  };
  return (
    <div className={classes["main-1"]}>
      <img src={backgroundFormImage} alt="BackgroundImage" />
      <div className={classes.heading1}>
        <h1 className={classes.middle}>Book Domestic and</h1>
        <h1 className={classes.middle2}>International Flight Tickets</h1>
      </div>
      <div className={classes["container"]}>
        <form onSubmit={SubmitHandler}>
          <div className={classes.one}>
            <label htmlFor="from">From:</label>
            <br />
            <input
              type="text"
              id="departure"
              name="departureName"
              placeholder="Enter Departure City"
              onChange={FromHandler}
            />
            <br />
          </div>
          <div className={classes.two}>
            <label htmlFor="to">To:</label>
            <br />
            <input
              type="text"
              id="arrival"
              name="arrivalName"
              placeholder="Enter Arrival City"
              onChange={ToHandler}
            />
            <br />
          </div>
          <div className={classes.three}>
            <label htmlFor="departureDate">Departure Date:</label>
            <br />
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              onChange={DepartureDateHandler}
            />
            <br />
          </div>

          <div className={classes.four}>
            <label htmlFor="ticketClass">Ticket Class:</label>
            <br />
            <select
              id="ticketClass"
              name="ticketClass"
              onChange={ClassSelectHandler}
              defaultValue="Economy"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First Class</option>
            </select>
            <br />
          </div>
          <div className={classes.five}>
            <input
              className={classes.submit}
              type="submit"
              value="Search Flight"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
