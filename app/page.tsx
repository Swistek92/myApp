"use client";
import React, { useState } from "react";

import CarouselMain from "@/Components/Carousels/CarouselMainPageComponent/CarouselMain";
import HomePage from "@/Components/HomePage/HomePage";
export default function Home() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <div className='main'>
      <div className='carousel-main'>
        <CarouselMain />
      </div>

      <div>
        <HomePage />
      </div>
    </div>
  );
}
