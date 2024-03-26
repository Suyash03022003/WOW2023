import React, { useContext } from "react";
import { ReactComponent as TwitterSvg } from "../../assets/Hero/twitter.svg";
import { ReactComponent as InstagramSvg } from "../../assets/Hero/instagram.svg";
import { ReactComponent as Linkedinsvg } from "../../assets/Hero/linkedin.svg";
import styles from "./Footer.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";

import { useThemeContext } from "../../theme/ThemeProvider";
import { ThemeContext } from "../../hooks/useTheme";

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      style={{ background: theme === 'light' ? "#fcfcfc" :"#181818" }}
      className={
        theme === 'light' ?
        styles["email-social"] :
        `${styles["email-social"]} ${styles["dark"]}`
      }
    >
      <div className={styles["email"]}>
        <p>Reach out to us at <span>:</span></p>
        <a
          style={{
            color: theme === 'light' ? 'rgba(66, 133, 244, 1)' :"rgba(15, 157, 86, 1)" 
          }}
          href="mailto:gdsc.nagpur@gmail.com"
        >
          gdsc.nagpur@gmail.com
        </a>
      </div>
      <p className={styles['community-guidlines']}><a style={{
        color:  theme === 'light' ? 'rgba(66, 133, 244, 1)' :
          "white"
      }} href="http://bit.ly/gdsc-coc" target="_blank" rel="noreferrer">Community Guidelines</a></p>
      <div className={styles["social"]}>
        <p>Follow us on</p>
        <div>
          <a
            className={ theme === 'light' ?
              styles["light-link"] : 
              styles["dark-link"]
            }
            href="https://twitter.com/gdsc_nagpur"
            target={"_blank"}
            rel="noreferrer"
          >
            <TwitterSvg></TwitterSvg>
          </a>
          <a
            className={theme === 'light' ?
              styles["light-link"] :
              styles["dark-link"]
            }
            href="https://www.instagram.com/gdsc_nagpur/"
            target={"_blank"}
            rel="noreferrer"
          >
            <InstagramSvg></InstagramSvg>
          </a>

          <a
            className={theme === 'light' ?
              styles["light-link"] :
              styles["dark-link"]
            }
            href="https://www.linkedin.com/company/gdsc-nagpur/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Linkedinsvg></Linkedinsvg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
