import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        © Kopiowanie treści strony bez zgody autora zabronione.{" "}
        <Link className={`next-link `} href='/policy'>
          polityka prywatnosci
        </Link>
      </p>
    </div>
  );
};

export default Footer;
