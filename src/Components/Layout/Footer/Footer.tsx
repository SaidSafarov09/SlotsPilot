import React, { PropsWithChildren } from "react";
import { titles, SubLigal } from "./helpers";
import styles from "./footer.module.scss";
import TextField from "@mui/material/TextField";
import { Button } from "../Button/Button";
import { Support } from "./Support/Support";

export const Footer: React.FC<PropsWithChildren> = ({}) => {
  return (
    <div className={styles.Footer}>
      <div className={styles.linksAndSub}>
        <div className={styles.links}>
          <div className={styles.linksContent}>
            {titles.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
                <ul>
                  {item.subTitles.map((subItem) => (
                    <li key={subItem.id}>
                      <a href={subItem.link}>{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.subscribe}>
          <p>Stay updated on the latest games and bonuses with Slots Pilot!</p>
          <div className={styles.subscribeInput}>
            <TextField
              className={styles.textField}
              fullWidth
              label="Your E-mail"
              id="fullWidth"
              inputProps={{
                className: styles.noOutline,
                style: { outline: "none" },
              }}
            />
            <Button color="#00B67A" buttonText="Subscribe" />
          </div>
          {SubLigal.map((item) => (
            <span>{item.subscribe}</span>
          ))}
        </div>
      </div>
      <div className={styles.ligal}>
        {SubLigal.map((item) => (
          <span>{item.ligal}</span>
        ))}
      </div>
      <div className={styles.support}>
        <Support />
      </div>
    </div>
  );
};
