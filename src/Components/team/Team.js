import React, { useContext } from "react";
import styles from "./Team.module.css";
import AvatarCard from "./AvatarCard";
import teamData from "./teamData";
import { ThemeContext } from "../../hooks/useTheme";
import Header from './../Header/Header';

const Team = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Header />
      <div className={styles.spaces}></div>
      <div className="layout-content" style={{ background: theme !== 'light' ? "#212224" : "#fefefe" }}>
        <div className={styles["container"]}>
          <div className={styles["heading"]}>
            <h1 style={{ color: theme === 'light' ? "#000000" : "#ffffff", fontWeight: "700" }}>
              Our Team
            </h1>
          </div>
          <div className={styles["content"]}>
            {teamData.map((data) => {
              return <>
                <AvatarCard key={data.id} {...data}></AvatarCard>
              </>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
