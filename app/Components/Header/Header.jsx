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
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../Store/modals-slice";

const Header = ({ showModal }) => {
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow((prev) => !prev);
  const closeMenu = () => setShow(false);
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  const showLogin = () => showModal("login");
  const showRegister = () => showModal("register");
  const showContact = () => showModal("contact");

  if (show) {
    window &&
      window.addEventListener("click", (e) => {
        const header = document.getElementById("headerContainer");

        if (e.target == header) {
          setShow(false);
        }
      });
  }

  if (status === "authenticated") {
    console.log(session);
  }

  return (
    <div
      required={show}
      id='headerContainer'
      className={styles.headerContainer}
    >
      <header className={styles.header} required={isStudio}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image alt='logo' src={logo} width={100} height={100} />
          </div>

          <nav className={styles.navbar}>
            {/* <button onClick={() => showLogin()}>SHOW MODAL</button> */}

            <div className={styles.brandName}>
              <span>Swistoklik.pl</span>
              {/* <span className={styles.colorMode}>
                <DarkModeButton />
              </span> */}
            </div>
            <div className={styles.darkmodeBtn}></div>

            <a
              href='#'
              className={styles.toggleBtn}
              onClick={() => toggleMenu()}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </a>

            <div className={styles.links} required={show}>
              <ul onClick={() => closeMenu()}>
                <li>
                  <Link href='/'> Home</Link>
                </li>
                {/* <li>
                  <Link href='/Posts'> Posts</Link>
                </li> */}
                {/* <li>
                  <Link href='/Tours'> tours</Link>
                </li> */}
                <li>
                  <Link href='/AboutMe'> AboutMe</Link>
                </li>

                <li>
                  <Link href='/Contact'> Contact</Link>
                </li>
                {!session && (
                  <>
                    <li>
                      <Link href='/Auth/signin'> login</Link>
                    </li>
                    <li>
                      <Link href='/Register'> register</Link>
                    </li>
                  </>
                )}

                {session && (
                  <li>
                    <Link href='/User'> user</Link>
                  </li>
                )}
                {session && session.user.role === "admin" && (
                  <li>
                    <Link href='/Admin'> admin</Link>
                  </li>
                )}
                {session && (
                  <li className={styles.logout} onClick={() => Logout()}>
                    <p>Logout</p>
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
    </div>
  );
};

export default Header;
