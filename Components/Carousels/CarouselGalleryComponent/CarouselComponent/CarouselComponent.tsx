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
import Image from "next/image";
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
  hoverEvent?: boolean;
  className?: string;
}

const CarouselComponent = ({
  imgs,
  handleShow,
  handleHide,
  show,
  hoverEvent,
  className,
}: Props) => {
  const handleVisibility = () => {
    if (!show && handleShow) {
      handleShow();
    } else if (show && handleHide) {
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
        modules={[Autoplay, Navigation]}
        className={`${styles.swiper} ${className}}`}
      >
        {imgs.map((e: slide, i: number) => {
          return (
            <SwiperSlide
              key={i}
              className={`${
                hoverEvent ? styles.swiperSlideHover : styles.swiperSlide
              }`}
              // className='imageCarousel'
            >
              <img
                className='imgFullScren'
                alt='img'
                src={e.img}
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* {handleShow && <Button onClick={() => handleShow()}>show</Button>} */}
    </div>
  );
};

export default CarouselComponent;
