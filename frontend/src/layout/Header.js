import { NavLink } from "react-router-dom";
import flightHeaderLogo from "../img/icon_logo_white-outline.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.nav}>
      <div className={classes["nav-inside-1"]}>
        <ul>
          <li>
            <img src={flightHeaderLogo} className={classes.toplogo} alt="" />
          </li>
          <li>
            <NavLink activeClassName={classes.active} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/booking">
              My Bookings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes["nav-inside-2"]}>
        <button className={classes.login}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <NavLink to="/signIn">Login</NavLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
