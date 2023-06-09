import Image from "next/image";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.css";
// export interface slideCollection {
//   title?: string;
//   imgs: slide[];
//   describe?: string;
// }

interface PreviwProps {
  show: boolean;
  img: string;
  hide: Function;
}
const Preview = ({ img, show, hide }: PreviwProps) => {
  return (
    <Modal show={show} className='model' onClick={() => hide()} fullscreen>
      <Image
        alt='preview'
        src={img}
        width={1000}
        height={1000}
        className={styles.img}
      />
    </Modal>
  );
};

export default Preview;
