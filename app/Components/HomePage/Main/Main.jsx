import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import ptok from "../../../../public/ptok.jpg";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import CarouselCube from "../../Carousel/Carusel";
import Carousel from "../../Carousel/Carusel";
const Main = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}> Photography enthusiast </h2>
      <div className={styles.flexboxConteriner}>
        <div className={`${styles.row} `}>
          <h3 className={styles.headingTertiary}>kind of Photography</h3>
          <p className={styles.paragrpah}>nature wildlife animals photos </p>
          <p className={styles.paragrpah}>landscape photography</p>
          <p className={styles.paragrpah}>portrait photography</p>
          <p className={styles.paragrpah}>product photography</p>

          <Link href='/Contact' className={`${styles.btn} ${styles.btnWhite}`}>
            contact Me →
          </Link>
        </div>

        <div className={`${styles.row1} `}>
          <Carousel />
        </div>
      </div>
    </main>
  );
};

export default Main;
