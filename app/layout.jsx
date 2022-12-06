"use client";
import "./mainStyles.css";

import ReactQueryWrappper from "./Components/Wrappers/QueryWrapper/ReactQueryWrappper";
import AuthWrapper from "./Components/Wrappers/AuthWrapper/AuthWrapper";
import Header from "./Components/Header/Header";
import Router from "next/router";
import styles from "./layout.module.css";
export default function RootLayout({ children, ...props }) {
  return (
    <>
      <ReactQueryWrappper>
        <AuthWrapper>
          <html lang='en'>
            <head />
            <body>
              <Header />
              <main className={styles.main}>{children}</main>
            </body>
          </html>
        </AuthWrapper>
      </ReactQueryWrappper>
    </>
  );
}
