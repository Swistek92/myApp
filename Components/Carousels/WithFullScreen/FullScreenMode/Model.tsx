"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
type slide = {
  img: string;
  title?: string;
};

interface Props {
  imgs: slide[];
  handleHide: Function;
  show: boolean;
}

const FullScreenModel = ({ imgs, handleHide, show }: Props) => {
  return (
    <Modal
      className='model'
      show={show}
      fullscreen={true}
      onHide={() => handleHide()}
    >
      <Modal.Header className='model medelHeader' closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body className='model'>
        <CarouselComponent
          imgs={imgs}
          show={show}
          handleHide={handleHide}
          hoverEvent={false}
        ></CarouselComponent>
      </Modal.Body>
    </Modal>
  );
};

export default FullScreenModel;
