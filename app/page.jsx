import "./mainStyles.css";
import Image from "next/image";
import styles from "./page.module.css";
import sunrise from "./../public/sunrise.jpg";
import Link from "next/link";
export default function Page() {
  return (
    <div className={styles.main}>
      <Image width={1280} height={960} src={sunrise} alt='img' />
      <div className={styles.logoBox}>
        <p className={styles.logo}>
          <span>&#9774;</span>
        </p>
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.heading}>
          <span className={styles.headingName}>??????</span>
          <span className={styles.headingSub}>is where life happens </span>
        </h1>
        <Link href='#' className={`${styles.btn} ${styles.btnWhite}`}>
          Discover Tours
        </Link>
      </div>
    </div>
  );
}
