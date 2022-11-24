import "./mainStyles.css";
import Image from "next/image";
import ja from "../public/ja.jpg";
import styles from "./page.module.css";
import Loading from "./Loading";
import sunrise from "../public/aba.JPG";
export default function Page() {
  return (
    <div className={styles.main}>
      <Image width={1280} src={sunrise} alt='Picture of the author' />
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
      </div>
    </div>
  );
}
