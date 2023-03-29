import React, { useContext } from "react";
import styles from "./CommunityPartner.module.css";
import { Link } from 'react-router-dom'
// import { useColorModeValue } from "../../hooks/useColorModeValue";
import { ReactComponent as Community1 } from "../../assets/community/newLight/community1.svg";
import { ReactComponent as Community2 } from "../../assets/community/newLight/community2.svg";
import { ReactComponent as Community3 } from "../../assets/community/newLight/community3.svg";
import { ReactComponent as Community4 } from "../../assets/community/newLight/community4.svg";
import { ReactComponent as Community5 } from "../../assets/community/newLight/community5.svg";
import { ReactComponent as Community6 } from "../../assets/community/newLight/community6.svg";
import { ReactComponent as Community7 } from "../../assets/community/newLight/community7.svg";
import { ReactComponent as Community8 } from "../../assets/community/newLight/community8.svg";
import { ReactComponent as Community9 } from "../../assets/community/newLight/community9.svg";
import { ReactComponent as Community10 } from "../../assets/community/newLight/community10.svg";
import { ReactComponent as Community11 } from "../../assets/community/newLight/community11.svg";
// import { ReactComponent as Community12 } from "../../assets/community/newLight/community12.svg";

// import { ReactComponent as Community14 } from "../../assets/community/community14.svg";
// import { ReactComponent as Community15 } from "../../assets/community/community15.svg";

import { ReactComponent as Community1Dark } from "../../assets/community/newDark/community1.svg";
import { ReactComponent as Community2Dark } from "../../assets/community/newDark/community2.svg";
import { ReactComponent as Community3Dark } from "../../assets/community/newDark/community3.svg";
import { ReactComponent as Community4Dark } from "../../assets/community/newDark/community4.svg";
import { ReactComponent as Community5Dark } from "../../assets/community/newDark/community5.svg";
import { ReactComponent as Community6Dark } from "../../assets/community/newDark/community6.svg";
import { ReactComponent as Community7Dark } from "../../assets/community/newDark/community7.svg";
import { ReactComponent as Community8Dark } from "../../assets/community/newDark/community8.svg";
import { ReactComponent as Community9Dark } from "../../assets/community/newDark/community9.svg";
import { ReactComponent as Community10Dark } from "../../assets/community/newDark/community10.svg";
import { ReactComponent as Community11Dark } from "../../assets/community/newDark/community11.svg";
import { themeContext } from "../../context/theme";
// import { ReactComponent as Community12Dark } from "../../assets/community/newDark/community12.svg";

// import { ReactComponent as Community14Dark } from "../../assets/community/newDark/community14.svg";
// import { ReactComponent as Community15Dark } from "../../assets/community/newDark/community15.svg";

const CommunityPartner = () => {

  const { theme } = useContext(themeContext);

  return (
    <div className={`${(theme === 'dark') ? 'bg-grey' : 'text-black'} ${styles["community-partners"]}`}>
      <h2 
      className={theme === 'dark' && 'text-white'}
      >
      {/* style={{ color: useColorModeValue("#505050", "#ffffff") }}> */}
        Community Partners
      </h2>
      {/* Light cards */}
      {
        (theme === "light") ?
          <section>
            <a href="https://gdsc.community.dev/shri-ramdeobaba-college-of-engineering-and-management-nagpur" target="_blank"><Community1 /></a>
            <a href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/" target="_blank"><Community2 /></a>
            <a href="https://gdsc.community.dev/bajaj-institute-of-technology-wardha/" target="_blank"><Community3 /></a>
            <a href="https://gdsc.community.dev/st-vincent-pallotti-college-of-engineering-technology-nagpur/" target="_blank"><Community4 /></a>
            <a href="https://gdsc.community.dev/indian-institute-of-information-technology-nagpur/" target="_blank"><Community5 /></a>
            <a href="https://gdsc.community.dev/visvesvaraya-national-institute-of-technology-nit-nagpur/" target="_blank"><Community6 /></a>
            <a href="https://gdsc.community.dev/government-college-of-engineering-nagpur/" target="_blank"><Community7 /></a>
            <a href="https://gdsc.community.dev/jd-college-of-engineering-management-nagpur/" target="_blank"><Community8 /></a>
            <a href="https://gdsc.community.dev/government-college-of-engineering-nagpur/" target="_blank"><Community9 /></a>
            <a href="https://gdsc.community.dev/yeshwantrao-chavan-college-of-engineering-nagpur/" target="_blank"><Community10 /></a>
            <a href="https://gdsc.community.dev/cummins-college-of-engineering-for-women-nagpur/" target="_blank"><Community11 /></a>
          </section>
        :
          <section>
            <a href="https://gdsc.community.dev/shri-ramdeobaba-college-of-engineering-and-management-nagpur" target="_blank"><Community1Dark /></a>
            <a href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/" target="_blank"><Community2Dark /></a>
            <a href="https://gdsc.community.dev/bajaj-institute-of-technology-wardha/" target="_blank"><Community3Dark /></a>
            <a href="https://gdsc.community.dev/st-vincent-pallotti-college-of-engineering-technology-nagpur/" target="_blank"><Community4Dark /></a>
            <a href="https://gdsc.community.dev/indian-institute-of-information-technology-nagpur/" target="_blank"><Community5Dark /></a>
            <a href="https://gdsc.community.dev/visvesvaraya-national-institute-of-technology-nit-nagpur/" target="_blank"><Community6Dark /></a>
            <a href="https://gdsc.community.dev/government-college-of-engineering-nagpur/" target="_blank"><Community7Dark /></a>
            <a href="https://gdsc.community.dev/jd-college-of-engineering-management-nagpur/" target="_blank"><Community8Dark /></a>
            <a href="https://gdsc.community.dev/government-college-of-engineering-nagpur/" target="_blank"><Community9Dark /></a>
            <a href="https://gdsc.community.dev/yeshwantrao-chavan-college-of-engineering-nagpur/" target="_blank"><Community10Dark /></a>
            <a href="https://gdsc.community.dev/cummins-college-of-engineering-for-women-nagpur/" target="_blank"><Community11Dark /></a>
          </section>
      }
    </div>
  );
};

export default CommunityPartner;
