import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import ptok from "../../public/ptok.jpg";
const page = () => {
  return (
    <div className={styles.main}>
      <Image
        className={styles.image}
        width={1280}
        height={960}
        src={ptok}
        alt='img'
      />
    </div>
  );
};

export default page;
