"use client";

import styles from "./Header.module.css";
import React, { useState } from "react";

import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow((prev) => !prev);
  const closeMenu = () => setShow(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandName}>
        Piotr Świstowski <span className={styles.peace}>&#9774;</span>
      </div>
      <a href='#' className={styles.toggleBtn} onClick={() => toggleMenu()}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>

      <div className={styles.links} required={show}>
        <ul onClick={() => closeMenu()}>
          <li>
            <Link href='/'> Home</Link>
          </li>
          <li>
            <Link href='/about'> About</Link>
          </li>
          <li>
            <Link href='/contact'> Contact</Link>
          </li>
          <li>
            <Link href='/signup'> auth</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
