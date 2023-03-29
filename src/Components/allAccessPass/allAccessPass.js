import React, { Component, useContext } from 'react'
import { ReactComponent as Pass } from "../../assets/allAccessPass/pass.svg"
import { ReactComponent as PassDark } from "../../assets/allAccessPass/PassDark.svg"
import { ReactComponent as Food } from "../../assets/allAccessPass/food.svg"
import { ReactComponent as Discord } from "../../assets/allAccessPass/discord.svg"
import { ReactComponent as Swags } from "../../assets/allAccessPass/swags.svg"
import { ReactComponent as Hackathon } from "../../assets/allAccessPass/hackathon.svg"
import { ReactComponent as Community } from "../../assets/allAccessPass/comm.svg"
import { ReactComponent as Sponsors } from "../../assets/allAccessPass/sponsors.svg"
import { ReactComponent as AsideDark } from "../../assets/allAccessPass/aside.png"
import { ReactComponent as AsideLight } from "../../assets/allAccessPass/aside.png"
import styles from './allAccessPass.module.css'
import { themeContext } from '../../context/theme'

const AllAccessPass = () => {
    const { theme } = useContext(themeContext)
        return (
            <div className={` ${theme === 'dark' ? 'bg-grey' : 'bg-white'} ${styles.main_pass}`}>
                <div className={` ${theme === 'dark' ? 'bg-[#191B1D] text-white' : 'bg-[#efefef] '} ${styles.pass}`}>
                    <div className={styles.row1}>
                        <div className={styles.pass_head}>
                            {
                                theme === 'dark' ? 
                                    <Pass className={styles.pass_svg}></Pass>
                                    :
                                    <PassDark className={styles.pass_svg}></PassDark> 
                            }
                            
                            <h1 className={styles.heading}>All Access Pass</h1>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.content_row1}>
                                <div className={styles.content_card1}>
                                    <Food className={styles.card_content} />
                                    <span>Food and Beverages</span>
                                </div>
                                <div className={styles.content_card1}>
                                    <Swags className={styles.card_content} />
                                    <span>Swags and Goodies</span>
                                </div>
                                <div className={styles.content_card1}>
                                    <Community className={styles.card_content} />
                                    <span>Commmunity Spaces</span>
                                </div>
                            </div>

                            <div className={styles.content_row2}>
                                <div className={styles.content_card1}>
                                    <Discord className={[styles.discord, styles.card_content].join(' ')} />
                                    <span>Private Discord Server</span>
                                </div>
                                <div className={styles.content_card1}>
                                    <Hackathon className={styles.card_content} />
                                    <span>Hackathons</span>
                                </div>
                                <div className={styles.content_card1}>
                                    <Sponsors className={styles.card_content} />
                                    <span>Sponsor Booths</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`text-white ${(theme === 'dark' ? ' bg-[url("/src/assets/allAccessPass/aside.png")]' : 'bg-[url("/src/assets/allAccessPass/asideLight.png")]')} ${styles.aside}`}>
                        <button className={styles.register}>Register Now</button>
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
        )
    
}



export default AllAccessPass;


