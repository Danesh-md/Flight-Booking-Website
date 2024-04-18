import IconLogo from "../img/icon_logo.png";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer}>
        <div>
          <div className={classes["logo-container"]}>
            <img src={IconLogo} alt="iconlogo" />
          </div>
          <div className={classes["footer-content"]}>
            <div className={classes["links-container"]}>
              <div>
                <ul className={classes["link-list"]}>
                  <li className={classes["list-item"]}>
                    <Link to="#" className={classes["footer-links"]}>
                      Contact Us
                    </Link>
                  </li>
                  <li className={classes["list-item"]}>
                    <Link className={classes["footer-links"]} to="#">
                      About Us
                    </Link>
                  </li>
                  <li className={classes["list-item"]}>
                    <Link className={classes["footer-links"]} to="#">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className={classes["list-item"]}>
                    <Link className={classes["footer-links"]} to="#">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes["quote-container"]}>
              <div className={classes["quote"]}>
                “Surround yourself with people that are smarter than you, give
                them everything they need to grow, and your business will
                thrive.”
              </div>
              <div className={classes["quote-by"]}>- Richard Branson</div>
            </div>
          </div>
          <div className={classes["social-links"]}>
            <div className={classes["social-icons"]}>
              <Link to="#" className={classes["social-icon"]}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="#1A1A1A"
                    d="m2 5.33333333h-2v2.66666667h2v8h3.33333333v-8h2.428l.23866667-2.66666667h-2.66666667v-1.11133333c0-.63666667.128-.88866667.74333334-.88866667h1.92333333v-3.33333333h-2.53866667c-2.39733333 0-3.46133333 1.05533333-3.46133333 3.07666667z"
                  ></path>
                </svg>
              </Link>
              <Link to="#" className={classes["social-icon"]}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 -1 16 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="#1A1A1A"
                    d="m16 1.70466667c-.5886667.26133333-1.2213333.43733333-1.8853333.51666666.678-.406 1.1986666-1.04933333 1.4433333-1.816-.634.376-1.3366667.64933334-2.0846667.79666667-.598-.638-1.452-1.03666667-2.396-1.03666667-2.1193333 0-3.67666663 1.97733334-3.19799997 4.03-2.72733333-.13666666-5.146-1.44333333-6.76533333-3.42933333-.86 1.47533333-.446 3.40533333 1.01533333 4.38266667-.53733333-.01733334-1.044-.16466667-1.486-.41066667-.036 1.52066667 1.054 2.94333333 2.63266667 3.26-.462.12533333-.968.15466667-1.48266667.056.41733334 1.304 1.62933334 2.2526667 3.06666667 2.2793333-1.38 1.082-3.11866667 1.5653334-4.86 1.36 1.45266667.9313334 3.17866667 1.4746667 5.032 1.4746667 6.0946667 0 9.538-5.14733333 9.33-9.764.6413333-.46333333 1.198-1.04133333 1.638-1.69933333z"
                  ></path>
                </svg>
              </Link>
              <Link to="#" className={classes["social-icon"]}>
                <svg
                  height="50"
                  width="50"
                  viewBox="10 22 53 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(-.443)"
                  >
                    <path d="m.943 0h48v48h-48z"></path>
                    <path
                      d="m29.75 14.319c1.159.053 1.789.246 2.208.41.555.215.951.473 1.367.889s.674.812.89 1.367c.163.42.356 1.05.41 2.209.049 1.087.065 1.514.068 3.676v2.26c-.003 2.161-.019 2.589-.069 3.676-.053 1.16-.246 1.79-.41 2.208-.215.555-.473.952-.889 1.368s-.812.674-1.367.89c-.42.162-1.05.356-2.209.409-1.087.05-1.514.065-3.676.069h-2.26c-2.162-.004-2.589-.02-3.676-.069-1.16-.053-1.789-.247-2.208-.41-.555-.215-.952-.473-1.368-.89-.416-.415-.674-.812-.89-1.367-.162-.419-.356-1.049-.409-2.208-.055-1.212-.068-1.604-.07-4.498v-.308c0-3.176.013-3.552.07-4.806.053-1.16.247-1.79.41-2.209.215-.555.473-.95.89-1.367.415-.416.812-.674 1.367-.89.419-.163 1.049-.356 2.208-.41 1.213-.055 1.605-.068 4.498-.069h.308c3.176 0 3.552.012 4.806.07zm-4.783 3.593c-3.376 0-6.112 2.736-6.112 6.111 0 3.376 2.736 6.112 6.112 6.112 3.375 0 6.112-2.736 6.112-6.112 0-3.375-2.737-6.111-6.112-6.111zm0 2.144c2.191 0 3.967 1.776 3.967 3.967 0 2.192-1.776 3.968-3.967 3.968s-3.968-1.776-3.968-3.968c0-2.19 1.777-3.967 3.968-3.967zm6.3-3.844c-.781 0-1.415.634-1.415 1.416s.634 1.416 1.416 1.416 1.415-.634 1.415-1.416-.633-1.416-1.415-1.416z"
                      fill="#1A1A1A"
                    ></path>
                  </g>
                </svg>
              </Link>
              <Link to="#" className={classes["social-icon"]}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="#1A1A1A"
                    d="m13.0766667.12266667c-2.4026667-.164-7.75400003-.16333334-10.15333337 0-2.598.17733333-2.904 1.74666666-2.92333333 5.87733333.01933333 4.1233333.32266667 5.6993333 2.92333333 5.8773333 2.4.1633334 7.75066667.164 10.15333337 0 2.598-.1773333 2.904-1.7466666 2.9233333-5.8773333-.0193333-4.12333333-.3226667-5.69933333-2.9233333-5.87733333zm-7.0766667 8.544v-5.33333334l5.3333333 2.662z"
                  ></path>
                </svg>
              </Link>
              <Link to="#" className={classes["social-icon"]}>
                <svg
                  height="25"
                  width="20"
                  viewBox="0 2 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(-12 -12)"
                  >
                    <path d="m0 0h44v44h-44z"></path>
                    <path
                      d="m12.504 18.413h3.899v13.587h-3.899zm1.85-1.7h-.028c-1.411 0-2.326-1.038-2.326-2.353 0-1.342.942-2.36 2.381-2.36 1.438 0 2.323 1.015 2.35 2.356 0 1.315-.912 2.358-2.377 2.358zm17.646 15.287h-4.42v-7.032c0-1.84-.692-3.095-2.212-3.095-1.163 0-1.81.847-2.11 1.665-.114.292-.096.7-.096 1.11v7.352h-4.38s.057-12.455 0-13.587h4.38v2.132c.259-.932 1.658-2.263 3.89-2.263 2.771 0 4.948 1.956 4.948 6.163z"
                      fill="#1A1A1A"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;