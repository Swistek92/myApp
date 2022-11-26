import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import ptok from "../../../../public/ptok.jpg";
import Link from "next/link";

const Main = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}> Lorem ipsum Lorem, ipsum.dolor sit </h2>
      <div className={styles.flexboxConteriner}>
        <div className={`${styles.row} ${styles.row1}`}>
          <h3 className={styles.headingTertiary}>
            Lorem ipsum dolor sit amet.
          </h3>
          <p className={styles.paragrpah}>
            asdasdasdlorem10sad Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolores, tempora?
          </p>
          <h3 className={styles.headingTertiary}> Lorem, ipsum dolor.</h3>
          <p className={styles.paragrpah}>
            asdasdasdlorem10sad Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolores, tempora?
          </p>

          <Link href='#' className={`${styles.btn} ${styles.btnWhite}`}>
            Discover Tours →
          </Link>
        </div>

        <div className={`${styles.row} ${styles.row2}`}>
          <div className={styles.composition}>
            <Image
              className={`${styles.image} ${styles.image1}`}
              width={400}
              height={300}
              src={ptok}
              alt='img'
            />
            <Image
              className={`${styles.image} ${styles.image2}`}
              width={400}
              height={300}
              src={ptok}
              alt='img'
            />
            <Image
              className={`${styles.image} ${styles.image3}`}
              width={400}
              height={300}
              src={ptok}
              alt='img'
            />
          </div>
        </div>
      </div>

      {/* <div className={styles.rows}>
        <div className={styles.row}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            praesentium voluptatem placeat laboriosam obcaecati maxime illo
            repudiandae quam recusandae asperiores eos ad commodi voluptates in,
            tempore nam iure nobis eum hic rerum? Sint exercitationem magnam
            voluptates laborum accusamus explicabo quaerat, sunt ullam modi quod
            quidem numquam, assumenda illo asperiores provident vero nobis
            impedit expedita recusandae soluta suscipit atque temporibus omnis
          </p>
          <button>asdas</button>
        </div>
        <div className={styles.row}>
          asdasasd
          <button>asdas</button>
        </div>
      </div> */}

      {/* <div className={styles.logoBox}>
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
      </div> */}
    </main>
  );
};

export default Main;
