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
import { Button, Modal } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import FullScreenModel from "./FullScreenMode/Model";

export type slide = {
  img: string;
  title?: string;
};

export interface slideCollection {
  imgs: slide[];
}

const Carousel = ({ imgs }: slideCollection) => {
  const [show, setShow] = useState(false);

  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <CarouselComponent
        imgs={imgs}
        handleShow={handleShow}
        handleHide={handleHide}
        show={show}
        hoverEvent={true}
      ></CarouselComponent>
      <FullScreenModel
        imgs={imgs}
        show={show}
        handleHide={handleHide}
      ></FullScreenModel>
    </div>
  );
};

export default Carousel;
