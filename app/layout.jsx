import ReactQueryWrappper from "./ReactQueryWrappper";
import Header from "./Components/Header/Header";

import styles from "./layout.module.css";
// import { ToastContainer } from "react-toastify";
// import toast from "../components/Toast";

export default function RootLayout({ children }) {
  return (
    <>
      <ReactQueryWrappper>
        <html lang='en'>
          <head />
          <body>
            <Header />
            <main className={styles.main}>{children}</main>
          </body>
        </html>
      </ReactQueryWrappper>
    </>
  );
}
