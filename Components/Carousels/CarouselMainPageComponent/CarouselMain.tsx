import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";

import Image from "next/image";
// import { cardsCollections } from "@/Components/Carousels/CarouselGalleryComponent/CarouselGallery";
import styles from "./styles.module.css";
import Preview from "./preview/Preview";
import {
  HomePageCarousel,
  imgHomeCarousel,
} from "@/utils/data/HomePageCarousel";
import FullScreenModal from "@/Components/Modals/FullScreenModal/Model";
const CarouselMain = () => {
  const img1 =
    "https://res.cloudinary.com/dftyei6oe/image/upload/v1686147097/mainCarousel001/IMG_5282-ANIMATION_zyi6rg.gif";
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <FullScreenModal img={img} handleHide={handleHide} show={show} />
        {/* <Preview show={show} img={img} hide={handleHide} /> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          navigation={false}
          modules={[FreeMode, Autoplay]}
          className={styles.swiper}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {HomePageCarousel.imgs.map((img: imgHomeCarousel, i: number) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={i}>
                <Image
                  onClick={() => {
                    handleShow();
                    setImg(img.url);
                  }}
                  alt={img.name}
                  src={img.url}
                  width={1000}
                  height={1000}
                  sizes='100vw'
                  className={styles.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default CarouselMain;
