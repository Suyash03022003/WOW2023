import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Venue.module.css";
import Location from "../../assets/venue/Location.png";
import MobView from "../../assets/venue/MobView.jpg";
import LargeView from "../../assets/venue/LargeView.jpg";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import { ThemeContext } from "../../hooks/useTheme";

const Venue = () => {
  const { theme } = useContext(ThemeContext)
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className={styles["venueContainer"]} style={{ background: theme !== 'light' ? "#212224" : "#fefefe" }}>
      <div id="venue" className={styles["heading"]}>
        <h2 style={{ color: theme == 'light' ? "#000000" : "#ffffff" }}>
          Venue
        </h2>
      </div>
      <div className={styles["container"]}>
        <div className={styles["mapContainer"]}>
          <div className={styles["text"]}>
            <div className={styles["locationSvg"]}>
              <img src={Location} alt="location"></img>
            </div>
            <div className={styles["locationText"]}>
              <p style={{ color: theme == 'light' ? "#000000" : "#ffffff" }}>
                Priyadarshini College of Engineering, Nagpur
              </p>
            </div>
          </div>
          <div className={styles["maps"]}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.279027957555!2d79.00683!3d21.1014391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4955ae1d75a6d%3A0x639a1ab160553db3!2sPriyadarshini%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1682624264484!5m2!1sen!2sin" width="600" height="450" style={{ border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className={styles["imageContainer"]}>
          <img
            src={isTabletOrMobile ? MobView : LargeView}
            alt="location"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Venue;
