import React, { useContext } from "react";
import styles from "./AvatarCard.module.css";
// import { ReactComponent as TwitterSvg } from "../../assets/Hero/twitter.svg";
// import { ReactComponent as LinkedinSvg } from "../../assets/Hero/linkedin.svg";
import { ThemeContext } from "../../hooks/useTheme";
// import { useColorModeValue } from "../../hooks/useColorModeValue";
import circle from "../../assets/team/circle.png"

const PatternCard = (props) => {
  const { theme } = useContext(ThemeContext)
  // const { imgSrc, name, designation, twitterLink, linkedinLink, gdscClg } =
  const { imgSrc, name } =
    props;

  return (
    <div className={styles["container"]}>
      <div
        className={styles["content"]}
      >
        <div className={styles["image"]}>
          <div className={styles["bg"]}>
            <img
              draggable={"false"}
              src={circle}
              alt={`${name}'s avatar pattern`}
            />
          </div>
          <div className={styles["avatar"]}>
            <img draggable={"false"} src={imgSrc} alt={`${name}'s avatar`} />
          </div>
        </div>
        <div className={styles["name"]}>
          <h2 style={{ color: theme === 'light' ? "#000000" : "#ffffff", marginTop: '20px' }}>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PatternCard;
