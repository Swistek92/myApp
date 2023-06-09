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
import FullScreenModel from "../../Modals/FullScreenModal/Model";
export type slide = {
  img: string;
  title?: string;
};

export interface slideCollection {
  title?: string;
  imgs: slide[];
  describe?: string;
}

export interface cardsCollections {
  cards: slideCollection[];
}

const CarouselGallery = ({ imgs }: slideCollection) => {
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
        img={imgs}
        show={show}
        handleHide={handleHide}
      ></FullScreenModel>
    </div>
  );
};

export default CarouselGallery;
