import { GalleryCollection } from "@/utils/data/GalleryCollection";
import FullScreenModal from "@/Components/Modals/FullScreenModal/Model";
import React from "react";
import galleryItem from "./galleryItem";
import GalleryItem from "./galleryItem";
const page = () => {
  const { cards } = GalleryCollection;
  return (
    <div>
      {/* <h1>Css grid gallery</h1> */}
      <div className='gridContainer'>
        {/* <div className={`${"galleryContainer"}`}>
          <div className={"galleryItem"} onClick={() => setImgs(cards[0].imgs)}>
            <div className={"image"}>
              <img src={cards[5].imgs[0].img} onClick={() => setShow(true)} />
              <FullScreenModal
                img={imgs}
                show={show}
                handleHide={handleHide}
              ></FullScreenModal>
            </div>
            <div className={"text"}>Nature</div>
          </div>
        </div> */}
        {/* <GalleryItem card={cards[0]} height='h2' /> */}
        <GalleryItem card={cards[0]} height='h4' width='w1' />
        <GalleryItem card={cards[1]} height='h2' width='w1' />
        <GalleryItem card={cards[2]} height='h2' width='w2' />
        <GalleryItem card={cards[3]} height='h2' width='w2' />
        <GalleryItem card={cards[4]} height='h2' width='w2' />
        <GalleryItem card={cards[5]} height='h3' width='w2' />
        <GalleryItem card={cards[6]} height='h2' />
        <GalleryItem card={cards[7]} height='h2' width='w2' />
        <GalleryItem card={cards[8]} height='h4' width='w2' />
        <GalleryItem card={cards[9]} height='h2' width='w2' />
        <GalleryItem card={cards[10]} height='h2' width='w1' />
        <GalleryItem card={cards[11]} height='h2' width='w1' />
        <GalleryItem card={cards[12]} height='h2' width='w2' />
        <GalleryItem card={cards[13]} height='h2' width='w2' />
        <GalleryItem card={cards[14]} height='h2' width='w2' />
        <GalleryItem card={cards[15]} height='h2' width='w2' />
        {/* <GalleryItem card={cards[16]} height='h4' /> */}
      </div>
    </div>
  );
};

export default page;

{
  /* {GalleryCollection.cards.map((e: slideCollection, i: number) => (
        <CardComponent
          key={i}
          title={e.title ? e.title : "title"}
          describe={e.describe && e.describe}
          imgs={e.imgs}
        />
      ))} */
}
