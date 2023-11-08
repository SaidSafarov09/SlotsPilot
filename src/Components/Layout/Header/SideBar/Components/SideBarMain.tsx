import React, { ReactNode } from "react";
import styles from "../sidebar.module.scss";
import { Arrow, Casino , Chart, Game , Pay, Gift } from "./img/index";

type Image = {
  image: ReactNode;
  text: string;
};

export const SidebarMain = () => {
  const greetings: Image[] = [
    {
      text: "Casino Games",
      image: (
        <>
          <Game />
        </>
      ),
    },
    {
      text: "Casino Bonuses",
      image: (
        <>
          <Gift />
        </>
      ),
    },
    {
      text: "Online Casinos",
      image: (
        <>
          <Casino />
        </>
      ),
    },
    {
      text: "Payment Methods",
      image: (
        <>
          <Pay />
        </>
      ),
    },
    {
      text: "By Type",
      image: (
        <>
          <Chart />
        </>
      ),
    },
  ];

  return (
    <div className={styles.SideBarProvider}>
      {greetings.map((item, index) => (
        <div className={styles.lineContent} key={index}>
          <div className={styles.brandName}>
            {typeof item.image === "string" ? (
              <img src={item.image} alt="Cover" />
            ) : (
              item.image
            )}
            <h3 className={styles.brandItems}>{item.text}</h3>
          </div>
          <div>
            <Arrow />
          </div>
        </div>
      ))}
    </div>
  );
};
