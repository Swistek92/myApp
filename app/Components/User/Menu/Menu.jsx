"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";
const Menu = () => {
  const { data: session, status } = useSession();
  if (!session) {
    return <p>^^</p>;
  }

  return (
    <nav className={styles.menu}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href='/user'> Main Menu</Link>
          </li>
          {session.user.role && (
            <li>
              <Link href='/user/changepassword'> change password</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
