import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import sunrise from "../../../../public/sunrise.jpg";
import Link from "next/link";

import logo from "../../../../public/logo.png";

const Header = ({ innerRef, myElementIsVisible }) => {
  return (
    <>
      <div ref={innerRef} className={styles.main}>
        <Image
          className={styles.image}
          width={1280}
          height={960}
          src={sunrise}
          alt='img'
          required={myElementIsVisible}
        />
        <div className={styles.logoBox}></div>
        <div className={styles.textBox}>
          <h1 className={styles.heading}>
            <span className={styles.headingName}>Full stack developer</span>
            <span className={styles.headingSub2}>
              Aplication && website && photography
            </span>
            <span className={styles.headingSub}>Piotr Świstowski</span>
          </h1>

          <Link href='/Contact' className={`${styles.btn} ${styles.btnWhite}`}>
            wanna talk ?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
