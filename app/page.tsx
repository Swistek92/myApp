"use client";
import React, { useState } from "react";

import CarouselMain from "@/Components/Carousels/CarouselMainPageComponent/CarouselMain";
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

      <h1 className='heading'>Hello green</h1>
    </div>
  );
}
