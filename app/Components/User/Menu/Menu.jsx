"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";
const Menu = () => {
  const { data: session, status } = useSession();
  const img = session.user.image;
  const isFb = img.includes("fbsbx");
  const isGoogle = img.includes("google");
  return (
    <nav className={styles.menu}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href='/user'> Main Menu</Link>
          </li>
          {/* {!isFb && !isGoogle && (
            <li>
              <Link href='/user/changepassword'> change password</Link>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
