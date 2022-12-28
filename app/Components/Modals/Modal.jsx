import React from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";
import styles from "./styles.module.css";
const Modal = ({ showModal }) => {
  // console.log(Boolean("112"));
  return (
    <div className={styles.container}>
      {" "}
      {/* <Register /> */}
      <Login />
    </div>
  );
};

export default Modal;
