"use client";
import "./mainStyles.css";

import Header from "./Components/Header/Header";
import styles from "./layout.module.css";
import Wrappers from "./Components/Wrappers/Wrappers";

export default function RootLayout({ children, ...props }) {
  return (
    <>
      <html lang='en'>
        <head />
        <body>
          <Wrappers>
            <Header />
            <main className={styles.main}>{children}</main>
          </Wrappers>
        </body>
      </html>
    </>
  );
}
