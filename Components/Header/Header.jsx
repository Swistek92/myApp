"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brandName}> brand name</div>
        <a
          href='#'
          className={styles.toggleBtn}
          onClick={() => setShow((prev) => !prev)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </a>

        <div className={styles.links} required={show}>
          <ul>
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
              <Link href='/login'> auth</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
