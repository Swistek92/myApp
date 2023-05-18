"use client";
import React, { useState } from "react";
import CardComponent from "../Components/Card/Cards";
import { collections } from "@/utils/data/collection";
import { slideCollection } from "@/Components/Carousels/WithFullScreen/Carousel";

export default function Home() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <div className='grid'>
      {collections.cards.map((e: slideCollection, i) => (
        <CardComponent key={i} title='wellcome' text='asd' imgs={e.imgs} />
      ))}
    </div>
  );
}
