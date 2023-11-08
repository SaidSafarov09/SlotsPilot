import React, { PropsWithChildren } from "react";
import { Header } from "./Header/Header";

import styles from "./layout.module.scss";
import { Footer } from "./Footer/Footer";

export type LayoutProps = {
  header?: boolean;
  footer?: boolean;
};

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  header,
  footer,
  children,
}) => {
  const asd = "dsds";
  return (
    <div className={styles.layout}>
      {header && <Header  />}
      <div className={styles.content}>{children}</div>
      {footer && <Footer />}
    </div>
  );
};
