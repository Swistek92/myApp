import React from "react";
import logo from "./logo.svg";
import styles from "./styles.module.css";
import Image from "next/image";
const Spinner = () => {
  return <Image src={logo} className={styles.AppLogo} alt='logo' />;
};

export default Spinner;
