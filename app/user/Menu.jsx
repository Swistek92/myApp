import Link from "next/link";
import React from "react";

import styles from "./menu.module.css";
const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href='/user'> Main Menu</Link>
          </li>
          <li>
            <Link href='/user/changepassword'> change password</Link>
          </li>
          {/* <li>
            <Link href='/contact'> Contact</Link>
          </li>
          <li>
            <Link href='/login'> login</Link>
          </li>
          <li>
            <Link href='/signup'> auth</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
