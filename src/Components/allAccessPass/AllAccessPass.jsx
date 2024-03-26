import React, { Component } from "react";
import { ReactComponent as Pass } from "../../assets/allAccessPass/pass.svg";
import { ReactComponent as Food } from "../../assets/allAccessPass/food.svg";
import { ReactComponent as Community } from "../../assets/allAccessPass/community.svg";
import { ReactComponent as Swags } from "../../assets/allAccessPass/swags.svg";
import { ReactComponent as Esport } from "../../assets/allAccessPass/esport.svg";
import { ReactComponent as Mike } from "../../assets/allAccessPass/comm.svg";
import { ReactComponent as FunActivity } from "../../assets/allAccessPass/funActivities.svg";
import { ReactComponent as Sponsors } from "../../assets/allAccessPass/sponsors.svg";
import aside from "../../assets/allAccessPass/aside.png";
import styles from "./allAccessPass.module.css";
import { useNavigate } from "react-router-dom";

const AllAccessPass = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main_pass}>
      <div className={styles.pass}>
        <div className={styles.row1}>
          <div className={styles.pass_head}>
            <Pass className={styles.pass_svg}></Pass>
            <h1 className={styles.heading}>All Access Pass</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.content_row1}>
              <div className={styles.content_card1}>
                <Mike className={styles.card_content} />

                <span>Tech Talks</span>
              </div>
              <div className={styles.content_card1}>
                <FunActivity className={styles.card_content} />
                <span>Fun Activities and Competition</span>
              </div>
              <div className={styles.content_card1}>
                <Swags className={styles.card_content} />
                <span>Swags and Goodies</span>
              </div>
            </div>

            <div className={styles.content_row2}>
              <div className={styles.content_card1}>
                <Community className={styles.card_content} />
                <span>Community Space</span>
              </div>
              <div className={styles.content_card1}>
                <Esport className={styles.card_content} />
                <span>E-Sports</span>
              </div>
              <div className={styles.content_card1}>
                <Food className={styles.card_content} />
                <span>Food and Beverages</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aside}>
            <button className={styles.register}>Registration Closed</button>
        </div>
        {/* <img src={aside} className='w-full h-auto' alt='aside img' /> */}
        {/* <div className={[styles.button_div, 'flex items-center w-[100%]'].join(' ')}>
                        <div className={[styles.button, 'w-[20%]'].join(' ')}>
                            <button className={[styles.register, 'text-white', 'rounded-md', 'px-5', 'py-[6px]', 'mt-4', 'text-xl'].join(' ')}>Register Now</button>
                        </div>
                    </div> */}
      </div>

      <div className={styles.hr}></div>
    </div>
  );
};

export default AllAccessPass;
