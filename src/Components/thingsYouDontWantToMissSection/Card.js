import React from 'react'
import styles from "./Card.module.css"
import { useColorModeValue } from '../../hooks/useColorModeValue'
import { useMediaQuery } from 'react-responsive'

const Card = (props) => {

    const {id , title, text, svg, index} = props

  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
    

  const getTagColor = (id) => {
      // red : EA4335
      // green: 0F9D58
      // yellow : DDB008
    if (id % 3 === 1) return '#EA4335' 
    else if (id % 3 === 2) return '#0F9D58'
    else return '#DDB008'
  }

  return (
    <div data-aos={isMobile ? "zoom-in" : "fade-up"} data-aos-delay={index * 100} data-aos-duration={"500"} className={styles["container"]}>
      <div
        // style={{ background: useColorModeValue("white", "#4a4b4d") }}
        className={styles["content"]}
      >
        <div style={{ background : `${getTagColor(id)}`}} className={styles["tag"]}>
          {id}.
        </div>


        <div className={styles["title"]}>
          <span className={styles["svg-container"]}>{svg}</span>
          <h3  >{title}</h3>
        </div>
        <div className={styles["text"]}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card