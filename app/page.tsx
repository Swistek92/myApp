"use client";
import React, { useState } from "react";
import Carousel from "../Components/Carousels/WithFullScreen/Carousel";
import CardComponent from "../Components/Card/Cards";
import { Card, Col, Container, Row } from "react-bootstrap";
const imgs = [
  {
    img: "https://res.cloudinary.com/dftyei6oe/image/upload/v1683204692/8_kbwu4y.jpg",
  },
  {
    img: "https://res.cloudinary.com/dftyei6oe/image/upload/v1683204696/2_kh0vo2.jpg",
  },
  {
    img: "https://res.cloudinary.com/dftyei6oe/image/upload/v1683204691/7_b2j0gk.jpg",
  },
  {
    img: "https://res.cloudinary.com/dftyei6oe/image/upload/v1683204692/5_csusey.jpg",
  },
  {
    img: "https://res.cloudinary.com/dftyei6oe/image/upload/v1683204692/6_uhkhes.jpg",
  },
  {
    img: "https://res.cloudinary.com/dftyei6oe/image/upload/v1672615934/IMG_6319_ybkxdy.jpg",
  },
];
const imgs1 = [
  {
    img: "https://res.cloudinary.com/dftyei6oe/image/upload/v1683204692/8_kbwu4y.jpg",
  },
];

export default function Home() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <div className='grid'>
      <CardComponent title='wellcome' text='asd' imgs={imgs1} />

      <CardComponent title='wellcome' text='asd' imgs={imgs} />

      <CardComponent title='wellcome' text='asd' imgs={imgs} />

      <CardComponent title='wellcome' text='asd' imgs={imgs} />

      <CardComponent title='wellcome' text='asd' imgs={imgs} />

      <CardComponent title='wellcome' text='asd' imgs={imgs} />
    </div>
  );
}

// <div>
//   <Container className='justift-content-center'>
//     <Row className='d-flex justify-content-between'>
//       <Col className='col' md>
//         <CardComponent title='wellcome' text='asd' imgs={imgs} />
//       </Col>
//       <Col className='col' md>
//         <CardComponent imgs={imgs} />
//       </Col>
//       <Col className='col' md>
//         <CardComponent imgs={imgs1} />
//       </Col>{" "}
//     </Row>
//   </Container>
// </div>
