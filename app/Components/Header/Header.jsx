"use client";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Header.module.css";
import React, { useState } from "react";

import Link from "next/link";
import { ToastContainer } from "react-toastify";
import Logout from "../../../utils/Authentications/Logout";
import DarkModeButton from "../Buttons/DarkMode/DarkModeButton";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow((prev) => !prev);
  const closeMenu = () => setShow(false);
  // let session1 = sessionFront;

  // useEffect(() => {
  //   console.log(
  //     "header session backend",
  //     session,
  //     "header session front",
  //     sessionFront
  //   );
  //   if (!session1) {
  //     if (!session1) {
  //       session1 = session;
  //     }
  //     if (!session1) {
  //       session1 = sessionFront;
  //     }
  //   }
  // }, [session, sessionFront]);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} width={100} height={100} />
        </div>

        <nav className={styles.navbar}>
          <div className={styles.brandName}>
            <span>Piotr Świstowski</span>
            <span className={styles.peace}>&#9774;</span>
            <span className={styles.colorMode}>
              <DarkModeButton />
            </span>
          </div>
          <div className={styles.darkmodeBtn}></div>

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
              {!session && (
                <>
                  <li>
                    <Link href='/auth/signin'> login</Link>
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
      </div>
    </header>
  );
};

export default Header;
