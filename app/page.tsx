"use client";
import React, { useState } from "react";
import CardComponent from "../Components/Card/Cards";
import { collections } from "@/utils/data/collection";
import { slideCollection } from "@/Components/Carousels/WithFullScreen/Carousel";
import Image from "next/image";

export default function Home() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <div className='main'>
      <Image
        src='https://res.cloudinary.com/dftyei6oe/image/upload/v1684426080/20230502_102109_uuccau.jpg'
        alt='123'
        className='responsiveImg'
        width={2000}
        height={2000}
      />
      <h1 className='heading'>Hello in My World</h1>
    </div>
  );
}
