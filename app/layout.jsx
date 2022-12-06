"use client";
import "./mainStyles.css";

import ReactQueryWrappper from "./Components/Wrappers/QueryWrapper/ReactQueryWrappper";
import AuthWrapper from "./Components/Wrappers/AuthWrapper/AuthWrapper";
import Header from "./Components/Header/Header";
import Router from "next/router";
import { usePageTransitionFix } from "../utils/hook/use-page-transition-fix";
import styles from "./layout.module.css";
export default function RootLayout({ children, ...props }) {
  usePageTransitionFix();
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
