import React, { useContext } from "react";
import Faq from "react-faq-component";
import styles from "./FAQs.module.css";
import { ThemeContext } from "../../hooks/useTheme";
import data from './data'

export default function FAQs() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div id="FAQs" className={`${theme === 'light' ? styles.faqsDivLight : styles.faqsDivDark}`}>    
      <section
      id="faq"
      className={`${theme === 'light' ? styles.faqsSectionLight : styles.faqsSectionDark }`}
      >
        <Faq style={styles["dark"]} data={data} />
      </section>
    </div>
  );
}
