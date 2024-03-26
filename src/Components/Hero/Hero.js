// import { useNavigate } from 'react-router-dom';
// import React, { Component } from "react";
import styles from "./Hero.module.css";
import { ReactComponent as LogoSVG } from "../../assets/whatIsGDSC/logocomplete.svg";
import { ReactComponent as GDSC } from "../../assets/Hero/GDSC.svg";
import eo from "../../assets/Hero//Union.png";
import { HeroSectionFloatingTexts } from "../../vars/constants";
import { HeroSectionArtwork } from "../HeroSectionArtwork";
import { HeroSectionNagpurMap } from "../HeroSectionMap";

export default function Hero() {
    // const navigate = useNavigate();
    return (
        <>
            <div className={styles.spaces}></div>
            <div className={styles.hero_main}>
                <div className={styles.hero_container}>
                    <GDSC className={styles.gdsc_svg}></GDSC>
                    <h1 className={styles.hero_head}>NAGPUR</h1>
                    <LogoSVG className={styles.hero_logo_svg}></LogoSVG>
                    <h1 className={styles.hero_heading}>
                        From&nbsp;{" "}
                        <span className={styles.span}>Zero Mile</span> &nbsp;to
                        infinit
                        <img src={eo} className={styles.eo} alt="eo" />
                        pportunities
                    </h1>
                        <button className={styles.register}>Registration Closed</button>
                </div>

                <div className={styles.mainHeroContainer}>
                    <div
                        className='hidden lg:block'
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            // height: "100%",
                        }}
                    >
                        {HeroSectionFloatingTexts.map((text, index) => {
                            return (
                                <div
                                    className={styles.floatingWoWTextContainer}
                                    style={{
                                        height: `${text.height}px`,
                                    }}
                                >
                                    <div
                                        key={index}
                                        className={styles.floatingText}
                                        style={{
                                            position: "absolute",
                                            top: `${text.top}px`,
                                            right: `${text.right}px`,
                                            fontSize: `${text.fontSize}px`,
                                        }}
                                    >
                                        {text.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <HeroSectionNagpurMap />

                    <HeroSectionArtwork />
                </div>
            </div>
            <div className={styles.hr}></div>
        </>
    );
}
