import classes from "./StaticImage.module.css";
import img1 from "../img/destination/1.png";
import img2 from "../img/destination/2.png";
import img3 from "../img/destination/3.png";
import img4 from "../img/destination/4.png";
import img5 from "../img/destination/5.png";
import img6 from "../img/destination/6.png";
import { Link } from "react-router-dom";

const StaticImage = () => {
  return (
    <div>
      <div className={classes["main-2"]}>
        <div className={classes["main-2-1"]}>
          <h1>Popular Destinations</h1>
        </div>
        <div className={classes["main-2-2"]}>
          <div className={classes["center"]}>
            <div className={classes["img-1"]}>
              <img src={img1} alt="" />
              <h2 className={classes["head2"]}>Italy</h2>
            </div>
            <div className={classes["img-2"]}>
              <img src={img2} alt="" />
              <h2 className={classes["head2"]}>Brazil</h2>
            </div>
            <div className={classes["img-3"]}>
              <img src={img3} alt="" />
              <h2 className={classes["head2"]}>America</h2>
            </div>
            <div className={classes["img-4"]}>
              <img src={img4} alt="" />
              <h2 className={classes["head2"]}>Nepal</h2>
            </div>
            <div className={classes["img-5"]}>
              <img src={img5} alt="" />
              <h2 className={classes["head2"]}>Maldives</h2>
            </div>
            <div className={classes["img-6"]}>
              <img src={img6} alt="" />
              <h2 className={classes["head2"]}>Indonesia</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.static}>
        <Link to="/citiesAndCodes">Show the Codes of Cities</Link>
      </div>
    </div>
  );
};

export default StaticImage;
