"use client";
import CardComponent from "@/Components/Card/Cards";
import { slideCollection } from "@/Components/Carousels/CarouselGalleryComponent/CarouselGallery";
import { GalleryCollection } from "@/utils/data/GalleryCollection";
import React from "react";

const page = () => {
  return (
    <div className='grid'>
      {GalleryCollection.cards.map((e: slideCollection, i: number) => (
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
