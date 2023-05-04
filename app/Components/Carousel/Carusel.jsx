import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import required modules
const Carousel = () => {
  return (
    <div className={styles.container}>
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
        <SwiperSlide className={styles.swiperSlide}>
          <img src='https://res.cloudinary.com/dftyei6oe/image/upload/v1683204692/8_kbwu4y.jpg' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src='https://res.cloudinary.com/dftyei6oe/image/upload/v1683204696/2_kh0vo2.jpg' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src='https://res.cloudinary.com/dftyei6oe/image/upload/v1683204691/7_b2j0gk.jpg' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src='https://res.cloudinary.com/dftyei6oe/image/upload/v1683204692/5_csusey.jpg' />
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.swiperSlide}>
          <img src='https://res.cloudinary.com/dftyei6oe/image/upload/v1683204692/6_uhkhes.jpg' />
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.swiperSlide}>
          <img src='https://res.cloudinary.com/dftyei6oe/image/upload/v1672615934/IMG_6319_ybkxdy.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
