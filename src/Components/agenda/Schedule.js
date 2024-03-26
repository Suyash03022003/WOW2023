import React, { useState, useContext } from "react";
import styles from "./Schedule.module.css";
import { ReactComponent as TableLight } from "../../assets/agenda/schedulelight.svg";
import { ReactComponent as TableDark } from "../../assets/agenda/scheduledark.svg";
import { ThemeContext } from "../../hooks/useTheme";

export const Schedule = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="agenda" className={styles.scheduletable} style={{ background: theme !== 'light' && '#212224' }} >
      { 
        theme === 'light' ? <TableLight className={styles.scheduletable} />
          : <TableDark className={styles.scheduletable} />
      }
      
    </div>
  );
};