import React, { useContext } from "react";
import styles from "./Card.module.css";
// import { useColorModeValue } from "../../hooks/useColorModeValue";
import { useMediaQuery } from "react-responsive";
import { themeContext } from "../../context/theme";

const DataCard = (props) => {
  const { svg, text, index } = props;
  const { theme } = useContext(themeContext)
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div
      data-aos-duration={"600"}
      data-aos-delay={isMobile ? null : index * 200}
      data-aos={isMobile ? "fade-right" : "fade-up"}
      className={styles.container}
    >
      <div
        // style={{ background: useColorModeValue("white", "#4a4b4d") }}
        className={` ${theme === 'dark' ? 'bg-grey' : 'bg-white'} ${styles["content"]}`}
      >
        <div
          data-aos={isMobile ? "flip-right" : "flip-down"}
          data-aos-duration={"1400"}
          className={styles["img"]}
          data-aos-delay={isMobile ? null : index * 200}
        >
          {svg}
        </div>
        <div className={` ${theme === 'dark' ? 'text-white' : 'text-black'} ${styles["text"]}`} >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
