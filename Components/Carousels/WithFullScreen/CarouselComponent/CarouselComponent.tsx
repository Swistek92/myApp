"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
import { Button } from "react-bootstrap";

type slide = {
  img: string;
  title?: string;
};

interface Props {
  imgs: slide[];
  onClick?: Function;
  handleShow?: Function;
  handleHide?: Function;
  show: boolean;
}

const CarouselComponent = ({ imgs, handleShow, handleHide, show }: Props) => {
  const handleVisibility = () => {
    if (!show && handleShow) {
      console.log("opening modal");
      handleShow();
    } else if (show && handleHide) {
      console.log("closiong modal");
      handleHide();
    }
  };

  return (
    <div className={styles.container} onClick={() => handleVisibility()}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {imgs.map((e: slide, i: number) => {
          return (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <img src={e.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* {handleShow && <Button onClick={() => handleShow()}>show</Button>} */}
    </div>
  );
};

export default CarouselComponent;
