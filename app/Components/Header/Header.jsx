"use client";

import styles from "./Header.module.css";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import Button from "../Button/Button";
import Logout from "../../../utils/Authentications/Logout";
import Image from "next/image";
const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow((prev) => !prev);
  const closeMenu = () => setShow(false);
  const { data: session, status } = useSession();
  // console.log(session);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brandName}>
        Piotr Świstowski <span className={styles.peace}>&#9774;</span>
      </div>
      <div className={styles.video}></div>

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
          {!session && (
            <>
              <li>
                <Link href='/login'> login</Link>
              </li>
              <li>
                <Link href='/register'> register</Link>
              </li>
            </>
          )}

          {session && (
            <li>
              <Link href='/user'> user</Link>
            </li>
          )}
          {session && session.user.role === "admin" && (
            <li>
              <Link href='/admin'> admin</Link>
            </li>
          )}
          {session && (
            <li className={styles.logout} onClick={() => Logout()}>
              <Link href='#'>Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
