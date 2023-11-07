import React, { PropsWithChildren } from "react";
import styles from "./header.module.scss";
import { Logo } from "./img/Logo";
import { Burger } from "./img/Burger";
import { SearchBar } from "./Search";
import { Button } from "../Button/Button";
import { Chat } from "./img/Chat";
import { useMediaQuery } from "@mui/material";
import { Afganistan } from "./img/Afganistan";
import { Profile } from "./img/Profile";
import { SearchImg } from "./img/SearchImg";

export const Header: React.FC<PropsWithChildren> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div className={styles.Header}>
      <div className={styles.burgerLogo}>
        {!isMobile && <Burger />}
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
      <div className={styles.search}>
        <SearchBar />
      </div>
      {isMobile ? (
        <div className={styles.entryChatMob}>
          <div className={styles.lang}>
            <p>EN</p>
            <div className={styles.line}></div>
            <Afganistan />
          </div>
          <div className={styles.logos}>
            <Profile />
            <SearchImg />
          </div>
        </div>
      ) : (
        <div className={styles.entryChat}>
          <div className={styles.entry}>
            <div className={styles.button}>
              <Button buttonText="Login" color="#00B67A" />
            </div>
            <div className={styles.button}>
              <Button buttonText="Register" color="#282645" />
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.chat}>
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
};
