"use client";
import FullScreenModal from "@/Components/Modals/FullScreenModal/Model";
import React, { useState } from "react";
import { slideCollection } from "@/Components/Carousels/CarouselGalleryComponent/CarouselGallery";

type props = {
  card: slideCollection;
  width?: "w1" | "w2" | "w3" | "w4" | "w5" | "w6";
  height?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
const GalleryItem = ({ card, width, height }: props) => {
  const [show, setShow] = useState(false);

  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={`${"galleryContainer"} ${width} ${height}`}>
      <div className={"galleryItem"}>
        <div className={"image"}>
          <img src={card.imgs[0].img} onClick={() => setShow(true)} />
          <FullScreenModal
            img={card.imgs}
            show={show}
            handleHide={handleHide}
          ></FullScreenModal>
        </div>
        <div className={"text"}>{card.title}</div>
      </div>
    </div>
  );
};

export default GalleryItem;
