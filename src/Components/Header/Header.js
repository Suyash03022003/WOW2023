import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import rectangle from "../../assets/Header/Rectangle 318.png";
import { ReactComponent as LogoSVG } from "../../assets/whatIsGDSC/logocomplete.svg";
import { ReactComponent as Orange } from "../../assets/Header/orange.svg";
import styles from "./Header.module.css";
import { menuItems } from "./data";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
    const { toggleTheme, theme } = useTheme();

    const [showMenu, setshowMenu] = useState(false);
    const [allNavLinks, setallNavLinks] = useState([...menuItems]);
    const [activeIndex, setactiveIndex] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location == "/#") {
            allNavLinks[0].isactive = true;
            allNavLinks[4].isactive = false;
        }
        else if (location == "/team") {
            allNavLinks[4].isactive = true;
            allNavLinks[0].isactive = false;
        }
    }, [])


    const changeShowMenu = () => {
        setshowMenu((prevState) => !prevState);
    };

    const changeactiveLink = (id) => {
        setactiveIndex(id);
        if (showMenu) {
            setshowMenu(false);
        }
    };

    const clickOutsidedrawer = () => { };

    return (
        <div className={[styles.main]}>
            {/* Navigation Drawer - Button */}
            {!showMenu && (
                <div className={[styles.div_drawer]} onClick={changeShowMenu}>
                    <svg
                        className={[styles.nav_drawer_icon]}
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
            )}
            <a href="#" onClick={() => changeactiveLink(1)} >
                <div className={[styles.div_head]}  >
                    <LogoSVG className={[styles.logo_svg]}></LogoSVG>

                    <img
                        draggable={false}
                        src={rectangle}
                        className={[styles.recimg]}
                        alt="Vertical rectangle"
                    />
                    <div className={[styles.header_heading]}>
                        <h1 className={[styles.header_heading_head]}>Nagpur</h1>
                        <span className={[styles.orange_div]}>
                            <Orange className={[styles.orange_svg]} />
                        </span>
                    </div>
                </div>
            </a>
            <div className={[styles.header_links]} id="listItem">
                {/* <p className={[styles.active, 'text-white', 'text-xl', 'cursor-pointer', 'py-[5px]'].join(' ')}>Home</p>
                <p className={`text-white text-xl cursor-pointer ${!showMenu ? 'py-[15px]' : 'py-[10px]'}` }>What and Why</p>
                <p className={`text-white text-xl cursor-pointer ${!showMenu ? 'py-[15px]' : 'py-[5px]'}` }>Venue</p>
                <p className={`text-white text-xl cursor-pointer ${!showMenu ? 'py-[15px]' : 'py-[5px]'}` }>FAQ's</p> */}

                {allNavLinks.map((nav) => {
                    return (
                        <a
                            href={nav.path}
                            className={``}
                            onClick={() => changeactiveLink(nav.id)}
                        >
                            <li
                                id=""
                                key={nav.id}
                                className={`${styles.nav_links} ${!showMenu ? "py-[15px]" : "py-[5px]"
                                    } ${activeIndex === nav.id && styles.activeLink
                                    } py-1`}
                                style={{ listStyle: "none" }}
                            >
                                {nav.title}
                            </li>
                        </a>
                    );
                })}

                <label
                    class={`${styles.toggle} ${showMenu ? "hidden" : "inline-flex"
                        }`}
                >
                    <label
                        className={`relative inline-flex items-center cursor-pointer`}
                    >
                        <input
                            type="checkbox"
                            onClick={() => {
                                toggleTheme();
                            }}
                            checked={theme === "light"}
                            className={`sr-only peer ${styles.themeToggler}`}
                        />
                        <div
                            className={`${styles.themeTogglerBackground} w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:bg-grey peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-grey after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-300 dark:border-gray-600`}
                        ></div>
                    </label>
                </label>
            </div>

            {/* navigation drawer */}
            <div
                className={
                    showMenu
                        ? `${styles.drawer}  absolute left-0 flex flex-col gap-1 justify-center items-center lg:hidden`
                        : `hidden`
                }
            >
                <div
                    className={`${showMenu ? "block" : "hidden"
                        } left-[15px] top-[25px]`}
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
                    {allNavLinks.map((nav) => {
                        return (
                            <li
                                key={nav.id}
                                className={`text-md ${activeIndex === nav.id && styles.activeLink
                                    } py-1`}
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

                    <label
                        class={`${styles.toggle} inline-flex
                    }`}
                    >
                        <label
                            className={`relative inline-flex items-center cursor-pointer`}
                        >
                            <input
                                type="checkbox"
                                onClick={() => {
                                    toggleTheme();
                                }}
                                checked={theme === "light"}
                                className={`sr-only peer ${styles.themeToggler}`}
                            />
                            <div
                                className={`${styles.themeTogglerBackground} w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:bg-grey peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-grey after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-300 dark:border-gray-600`}
                            ></div>
                        </label>
                    </label>
                </ul>

            </div>
        </div>
    );
};

export default Header;
