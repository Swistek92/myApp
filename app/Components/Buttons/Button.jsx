import React, { Children } from "react";
import styles from "./styles.module.css";

const Button = (props) => {
  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
