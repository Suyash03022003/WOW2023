import React from "react";
import styles from "./CommunityPartner.module.css";
import { ReactComponent as Community1Dark } from "../../assets/community/newDark/community1.svg";
import { ReactComponent as Community2Dark } from "../../assets/community/newDark/community2.svg";
import { ReactComponent as Community3Dark } from "../../assets/community/newDark/community3.svg";
import { ReactComponent as Community4Dark } from "../../assets/community/newDark/community4.svg";
import { ReactComponent as Community5Dark } from "../../assets/community/newDark/community5.svg";
import { ReactComponent as Community8Dark } from "../../assets/community/newDark/community8.svg";
import { ReactComponent as Community9Dark } from "../../assets/community/newDark/community9.svg";
import { ReactComponent as Community10Dark } from "../../assets/community/newDark/community10.svg";
import { ReactComponent as Community11Dark } from "../../assets/community/newDark/community11.svg";

const CommunityPartner = () => {
    return (
        <div className={
            `${styles.communityPartners
            } bg-grey`
        }>
            <h2> {/* style={{ color: useColorModeValue("#505050", "#ffffff") }}> */}
                Regional GDSCs
            </h2>
            {/* Light cards */}
            {/* <section>
          <Community1 />
          <Community2 />
          <Community3 />
          <Community4 />
          <Community5 />
          <Community6 />
          <Community7 />
          <Community8 />
          <Community9 />
          <Community10 />
          <Community11 />
        </section> */}

            {/* Dark cards */}
            <section>
                <a href="https://gdsc.community.dev/shri-ramdeobaba-college-of-engineering-and-management-nagpur">
                    <Community1Dark />
                </a>
                <a href="https://gdsc.community.dev/jd-college-of-engineering-management-nagpur/">
                    <Community10Dark />
                </a>
                <a href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/">
                    <Community2Dark />
                </a>
                <a href="https://gdsc.community.dev/bajaj-institute-of-technology-wardha/">
                    <Community3Dark />
                </a>
                <a href="https://gdsc.community.dev/yeshwantrao-chavan-college-of-engineering-nagpur/">
                    <Community8Dark />
                </a>

                <a href="https://gdsc.community.dev/cummins-college-of-engineering-for-women-nagpur/">
                    <Community11Dark />
                </a>
                {/* 
                <a href="https://gdsc.community.dev/indian-institute-of-information-technology-nagpur/">
                    <Community5Dark/>
                </a>
*/}
                <a href="https://gdsc.community.dev/government-college-of-engineering-nagpur/">
                    <Community9Dark />
                </a>

                <a href="https://gdsc.community.dev/st-vincent-pallotti-college-of-engineering-technology-nagpur/">
                    <Community4Dark />
                </a>
            </section>
        </div>
    );
};

export default CommunityPartner;
