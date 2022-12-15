import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import sunrise from "../../../../public/sunrise.jpg";
import Link from "next/link";

import logo from "../../../../public/logo.png";

const Header = () => {
  return (
    <div className={styles.main}>
      <Image
        className={styles.image}
        width={1280}
        height={960}
        src={sunrise}
        alt='img'
      />
      <div className={styles.logoBox}>
        {/* <p className={styles.logo}>
          <Image src={logo} width={100} height={100} />        </p> */}
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.heading}>
          <span className={styles.headingName}>?:?:</span>
          <span className={styles.headingSub}>lalalalalaa</span>
        </h1>
        <Link href='/contact' className={`${styles.btn} ${styles.btnWhite}`}>
          wanna talk ?
        </Link>
      </div>
    </div>
  );
};

export default Header;
