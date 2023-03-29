import React, { useContext, useState, useEffect } from "react";

import rectangle from "../../assets/Header/Rectangle 318.png";
import { ReactComponent as LogoSVG } from "../../assets/whatIsGDSC/logocomplete.svg";
import { ReactComponent as Orange } from "../../assets/Header/orange.svg";
import styles from "./Header.module.css";
import { menuItems } from "./data";
import { themeContext } from "../../context/theme";

const Header = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [activeIndex, setactiveIndex] = useState(1);

    const { theme, settheme } = useContext(themeContext)
    const changeShowMenu = () => {
        setshowMenu((prevState) => !prevState);
    };

    const changeactiveLink = (id) => {
        setactiveIndex(id)
        if (showMenu) {
            setshowMenu(false)
        }
    }

    const changeTheme = () => {
        if(theme === 'light') {
            
            settheme("dark")
        } else {
            settheme("light")
            
        }
    }

    
    
    return (
        <div className={`${[styles.main]} 
        ${theme === 'dark' ? 'bg-grey' : 'bg-white'}
        ` }>
            {/* Navigation Drawer - Button */}
        
                <div
                    className={`${[styles.div_drawer]}${(theme === 'light')? 'text-[#777777]' : 'text-white'} block lg:hidden`}
                    onClick={changeShowMenu}
                >
                    <svg
                        className={`${[styles.nav_drawer_icon]} ${(theme === 'light') ? 'text-[#777777]' : 'text-white'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
            

            <div className={[styles.div_head]}>
                <LogoSVG className={[styles.logo_svg]}></LogoSVG>

                <img
                    draggable={false}
                    src={rectangle}
                    className={[styles.recimg]}
                    alt="Vertical rectangle"
                />
                <div className={[styles.header_heading]}>
                    <h1 className={`${[styles.header_heading_head]} ${(theme === 'dark') ? 'text-white' : 'text-[#777777]'}`}>
                        Nagpur
                    </h1>
                    <span className={[styles.orange_div]}>
                        <Orange className={[styles.orange_svg]} />
                    </span>
                </div>
            </div>

            <div className={[styles.header_links]} id="listItem">
                {/* <p className={[styles.active, 'text-white', 'text-xl', 'cursor-pointer', 'py-[5px]'].join(' ')}>Home</p>
                <p className={`text-white text-xl cursor-pointer ${!showMenu ? 'py-[15px]' : 'py-[10px]'}` }>What and Why</p>
                <p className={`text-white text-xl cursor-pointer ${!showMenu ? 'py-[15px]' : 'py-[5px]'}` }>Venue</p>
                <p className={`text-white text-xl cursor-pointer ${!showMenu ? 'py-[15px]' : 'py-[5px]'}` }>FAQ's</p> */}

                {menuItems.map((nav) => {
                    return <a
                        href={nav.path}
                        className={``}
                        onClick={() => changeactiveLink(nav.id)}
                    >
                        <li id="" key={nav.id} className={` 
                        ${(theme === 'light' ? 'text-[#777777]' : 'text-white')} 
                        ${styles.nav_links} 
                        ${showMenu && 'py-[5px]' } 
                        ${(activeIndex === nav.id) && (theme === 'dark' ? styles.activeLinkDark : styles.activeLinkLight)} flex px-2 flex-col justify-center`}
                        >
                            {nav.title}
                        </li>
                    </a>
                })}

                <label
                    class={`${styles.toggle} 
                        inline-flex
                    `   
                    }
                >Change Theme
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            defaultChecked
                            onClick={() => changeTheme()}
                        />
                        <div className="w-11 h-6 bg-white peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:bg-grey peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-grey after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-300 dark:border-gray-600"></div>
                    </label>
                </label>
            </div>

            {/* navigation drawer */}
            <div
                className={
                    showMenu
                        ? `${styles.drawer} absolute left-0 flex flex-col gap-1 justify-center items-center lg:hidden`
                        : `hidden`
                }
            >
                <div
                    className={`${showMenu ? "block" : "hidden"
                        } left-[15px] top-[25px]
                        ${theme === 'dark' ? 'text-white' : 'text-[#777777]'}
                        `}
                    onClick={changeShowMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <ul className="flex flex-col items-center mt-10 gap-5">
                    {menuItems.map((nav) => {
                        return (
                            <li
                                key={nav.id}
                                className={`text-md ${activeIndex === nav.id && styles.activeLinkDark
                                    } py-1  
                                    ${theme === 'dark' ? 'text-white' : 'text-[#777777]'}
                                    `  }
                            >
                                <a
                                    href={nav.path}
                                    className={``}
                                    onClick={() => changeactiveLink(nav.id)}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <label
                    class={`${styles.toggle} 
                        inline-flex py-5
                    `
                    }
                >
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            defaultChecked
                            onClick={() => changeTheme()}
                        />
                        <div className="w-11 h-6 bg-white peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:bg-grey peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-grey after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-300 dark:border-gray-600"></div>
                    </label>
                </label>
            </div>
        </div>
    );
};

export default Header;