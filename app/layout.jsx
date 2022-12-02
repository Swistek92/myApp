"use client";

import ReactQueryWrappper from "./Components/Wrappers/QueryWrapper/ReactQueryWrappper";
import AuthWrapper from "./Components/Wrappers/AuthWrapper/AuthWrapper";
import Header from "./Components/Header/Header";

import styles from "./layout.module.css";
// import { ToastContainer } from "react-toastify";
// import toast from "../components/Toast";
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
