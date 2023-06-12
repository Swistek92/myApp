"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CarouselComponent from "../../Carousels/CarouselGalleryComponent/CarouselComponent/CarouselComponent";
import Image from "next/image";
import styles from "./styles.module.css";
type slide = {
  img: string;
  title?: string;
};

interface Props {
  img: slide[] | string;
  handleHide: Function;
  show: boolean;
}

const FullScreenModal = ({ img, handleHide, show }: Props) => {
  if (typeof img === "string") {
    return (
      <Modal
        show={show}
        className='model'
        onClick={() => handleHide()}
        fullscreen
      >
        <Image
          alt='preview'
          src={img}
          width={1000}
          height={1000}
          className={styles.img}
        />
      </Modal>
    );
  }
  return (
    <Modal
      cclassNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      show={show}
      fullscreen
      onClick={() => handleHide()}
      centered
    >
      <CarouselComponent
        imgs={img}
        show={show}
        handleHide={handleHide}
        hoverEvent={false}
      ></CarouselComponent>
    </Modal>
  );
};

export default FullScreenModal;
