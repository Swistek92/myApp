"use client";

import styles from "./Header.module.css";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const audio = useRef();

  audio.current;
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
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
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
