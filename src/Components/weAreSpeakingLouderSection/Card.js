import React from "react";
import styles from "./Card.module.css";
// import { useColorModeValue } from "../../hooks/useColorModeValue";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "../../hooks/useTheme";

const DataCard = (props) => {
    const { svg, text, index } = props;
    const { toggleTheme, theme } = useTheme();
    const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

    return (
        <div
            data-aos-duration={"600"}
            data-aos-delay={isMobile ? null : index * 200}
            data-aos={isMobile ? "fade-right" : "fade-up"}
            className={styles.container}
        >
            <div
                
                className={`${[styles["content"]]} ${theme === 'dark' ? 'bg-grey' : 'bg-white'}`}
            >
                <div
                    data-aos={isMobile ? "flip-right" : "flip-down"}
                    data-aos-duration={"1400"}
                    className={styles["img"]}
                    data-aos-delay={isMobile ? null : index * 200}
                >
                    {svg}
                </div>
                <div className={`${theme === 'light' ? 'text-black' : 'text-white'} ${styles["text"]}`}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default DataCard;
