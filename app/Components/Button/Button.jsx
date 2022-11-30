import React, { Children } from "react";
import styles from "./styles.module.css";

const Button = ({ children, type }) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
