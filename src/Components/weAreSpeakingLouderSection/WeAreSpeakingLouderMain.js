import React from "react";
import DataCard from "./Card";
import weAreSpeakingLouderData from "./data";
import styles from "./WeAreSpeakingLouderMain.module.css";
// import { useColorModeValue } from "../../hooks/useColorModeValue";

const WeAreSpeakingLouderMain = () => {

  return (
    <>

      <div className={styles["parentDiv"]}>
        <div className={[styles.container, 'bg-grey'].join(' ')} >
          <div className={styles["heading"]}>
            <h1>We're Speaking Louder</h1>
          </div>
          <div className={styles["content"]}>
            <div className={styles["data-cards"]}>
              {weAreSpeakingLouderData.map((card, index) => {
                return (
                  <DataCard index={index} key={card.id} {...card}></DataCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>


      {/* * MARQUE TEXT */}
      {/* <div className={styles["marqueeAnimContainer"]}>
        <div className={styles["marqueeAnim"]}>
          <div>
            {marqetext.map((text, index) => {
              return (
                <span key={index} style={{ backgroundColor: text.color }}>{text.text}</span>
              );
            })}
          </div>
          <div>
            {marqetext.map((text, index) => {
              return (
                <span key={index} style={{ backgroundColor: text.color }}>{text.text}</span>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default WeAreSpeakingLouderMain;
