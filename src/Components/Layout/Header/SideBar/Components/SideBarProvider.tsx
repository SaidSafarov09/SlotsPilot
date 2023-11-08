import React, { useEffect, useState } from "react";
import styles from "../sidebar.module.scss";
import axios from "axios";
import { API_URL } from "../../../../../provider";
import { Arrow } from "./img/index";

interface Item {
  id: string;
  title: string;
  founded: number;
  website_url: string;
  cover?: {
    url: string;
  };
}

interface APIResponse {
  items: Item[];
  limit: number;
  offset: number;
  has_more: boolean;
}

export const SideBarProvider = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    axios
      .get<APIResponse>(`${API_URL}/provider`)
      .then((response) => setData(response.data.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.SideBarProvider}>
      <h1>
        Providers
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </h1>
      {data.map((item) => (
        <div key={item.id} className={styles.lineContent}>
          <div className={styles.brandName}>
            {item.cover && <img src={item.cover.url} alt="Cover" />}
            <h3>{item.title}</h3>
          </div>
          <div className={styles.leftContent}>267</div>
        </div>
      ))}
    </div>
  );
};
