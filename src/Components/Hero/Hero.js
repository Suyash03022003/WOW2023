import React, { Component, useContext } from 'react'
import styles from './Hero.module.css'
import { ReactComponent as LogoSVG } from "../../assets/whatIsGDSC/logocomplete.svg"
import { ReactComponent as GdscDark } from "../../assets/Hero/GDSC.svg"
import { ReactComponent as GdscLight } from "../../assets/Hero/GDSC_light.svg"
import eo from "../../assets/Hero//Union.png"
import { themeContext } from '../../context/theme'

const Hero = () => {
    const { theme } = useContext(themeContext);

        return (
            <>
                <div className={` ${theme === 'dark' ? 'bg-grey': 'bg-white' } ${styles.hero_main} ${theme === 'dark' ? `bg-[url('/src/assets/Hero/background.png')]` : `bg-[url('/src/assets/Hero/bg-light.png')]` }`}>
                    <div className={`${styles.hero_container} ${theme === 'dark' ? 'text-white' : 'text-[#777777]'}`}>
                        {
                            theme === 'dark' ? <GdscDark className={styles.gdsc_svg}></GdscDark> : <GdscLight className={styles.gdsc_svg} ></GdscLight>
                        }
                        
                        <h1 className={styles.hero_head}>NAGPUR</h1>
                        <LogoSVG className={styles.hero_logo_svg}></LogoSVG>
                        <h1 className={styles.hero_heading}>From&nbsp; <span className={styles.span}>Zero Mile</span> &nbsp;to infinit<img src={eo} className={styles.eo} alt="eo"/>pportunities</h1>
                        <button
                        style={{ minWidth: ""}}
                        className={styles.register}>Register Now</button>
                    </div>
                </div>
                <div className={styles.hr}></div>
            </>
        )
}


export default Hero;