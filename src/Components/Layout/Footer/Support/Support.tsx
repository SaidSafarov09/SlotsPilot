import React from "react";
import styles from "./support.module.scss";
import discord from "./img/discord.png";
import tg from "./img/tg.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";

export const Support = () => {
  return (
    <div className={styles.supportContent}>
      <div className={styles.socialLinks}>
        <div className={styles.socialBrands}>
          <a href="#">
            <img src={discord} alt="discord" />
          </a>
          <a href="#">
            <img src={tg} alt="tg" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <div className={styles.socialEmail}>
          <div className={styles.Email}>
            <p>Support</p>&nbsp;
            <span>support@slotspilot.com</span>
          </div>
          &nbsp;
          <div className={styles.line}></div>
          &nbsp;
          <div className={styles.Email}>
            <p>Partners</p>&nbsp;
            <span>partners@slotspilot.com</span>
          </div>
          &nbsp;
          <div className={styles.line}></div>
          &nbsp;
          <div className={styles.Email}>
            <p>Press</p>&nbsp;
            <span>press@slotspilot.com</span>
          </div>
        </div>
      </div>
      <div className={styles.brandName}>
        <a href="#">SlotsPilot © 2023</a>
      </div>
    </div>
  );
};
