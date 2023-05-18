"use client";
import CardComponent from "@/Components/Card/Cards";
import { slideCollection } from "@/Components/Carousels/WithFullScreen/Carousel";
import { collections } from "@/utils/data/collection";
import React from "react";

const page = () => {
  return (
    <div className='grid'>
      {collections.cards.map((e: slideCollection, i) => (
        <CardComponent
          key={i}
          title={e.title ? e.title : "title"}
          describe={e.describe && e.describe}
          imgs={e.imgs}
        />
      ))}
    </div>
  );
};

export default page;
