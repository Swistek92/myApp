import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import ptok from "../../public/ptok.jpg";
import Button from "../Components/Buttons/Button";
const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>name card</div>
          <div className={styles.cardBody}>
            card Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            consequatur.{" "}
          </div>
          <div className={styles.cardFooter}>
            <Button>details</Button>
            <Button>contact seller</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
