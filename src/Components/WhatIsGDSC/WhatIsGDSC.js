import React, { Component, useContext } from 'react'
import loc from '../../assets/whatIsGDSC/loc.png'
import { ReactComponent as LogoSVG } from "../../assets/whatIsGDSC/logocomplete.svg"
import { ReactComponent as Logo } from "../../assets/whatIsGDSC/logo.svg"
import { ReactComponent as Loc1 } from "../../assets/whatIsGDSC/loc1.svg"
import { ReactComponent as Loc3 } from "../../assets/whatIsGDSC/loc3.svg"
import styles from './WhatIsGDSC.module.css'
import { themeContext } from '../../context/theme'

const WhatIsGDSC =() => {
    
        const { theme } = useContext(themeContext)
        return (
            <div id="what&hwy" className={` ${theme === 'dark' ? 'bg-grey' : 'bg-white'} ${styles.what_main}`}>
                <div className={styles.what_container}>
                    <div className={styles.what_row1}>
                        <h1 className={`${styles.what_is_gdsc} ${theme === 'dark' ? 'text-white' : 'black'}`}>What is GDSC</h1>
                        <LogoSVG className={styles.what_logo_svg}></LogoSVG>
                        <h1 className={`${styles.what_head} ${theme === 'dark' ? 'text-white' : 'black'}`}>?</h1>
                    </div>
                    <Loc1 className={styles.what_loc1}></Loc1>
                    <Loc3 className={styles.what_loc2}></Loc3>
                </div>
                <div className={styles.row2}>
                    <Logo className={styles.what_logo}></Logo>
                    <div className={`${styles.what_content} ${theme === 'dark' ? 'text-white' : 'text-[#777777]'}`}>
                        <p className={styles.what_para1}>Technology has transformed the world we live in and has brought about countless benefits to society. The <span className={styles.what_span}>GDSC WOW</span> (Wonder of Wonders) is an eagerly anticipated tech event that aims to unveil the secrets of technology and propel us to greater heights.</p>
                        <p className={styles.what_para2}>This event is a wonder in itself, and is open to all tech enthusiasts and students looking to expand their knowledge of the tech world. It provides a fantastic opportunity to enter the life-changing world of technology and learn from experts in the field. With the latest advancements and innovations on display, attendees can expect to be awed and inspired by the incredible possibilities that technology offers.</p>
                        <p className={styles.what_para3}>Join us at <span className={styles.what_span}>GDSC WOW</span> and be a part of the revolution that is transforming the world. With its engaging and informative sessions, this event is sure to be a game changer for all those who attend. Don't miss out on this golden opportunity to discover the wonders of technology and take your skills to the next level!</p>
                    </div>
                </div>
            </div>
        )
}

export default WhatIsGDSC;