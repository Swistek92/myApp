"use client";
import "./mainStyles.css";

import Header from "./Components/Header/Header";
import styles from "./layout.module.css";
import Wrappers from "./Components/Wrappers/Wrappers";
import { useState } from "react";
import Modal from "./Components/Modals/Modal";
import Register from "./Components/Modals/Register/Register";
export default function RootLayout({ children, ...props }) {
  const [showModal, setShowModal] = useState("");

  window.onclick = function (event) {
    const modal = document.getElementById("myModal");

    if (event.target == modal) {
      setShowModal("");
    }
  };
  return (
    <html lang='en'>
      <head />
      <body>
        <Wrappers>
          <Header showModal={setShowModal} />
          {Boolean(showModal) && (
            <div id='myModal' className={styles.modal}>
              <Modal showModal={showModal} />
            </div>
          )}
          <main id='main' required={showModal} className={styles.main}>
            {children}
          </main>
        </Wrappers>
      </body>
    </html>
  );
}
