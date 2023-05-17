"use client";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Card, Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Software = () => {
  return (
    <div>
      <div className={styles.container}>
        {/* <h3 className={styles.aboutHeader}> Electricity </h3> */}

        <Container>
          <Row className='d-flex justify-content-between'>
            <Col className='col' md>
              <motion.img
                src='https://res.cloudinary.com/dftyei6oe/image/upload/v1660897748/natours/ilnfox5yc0jfnayxl8pw.png'
                // width={100}
                // height={100}
                alt='laala'
                initial={{ x: 200, opacity: 0, scale: 0.5 }}
                whileInView={{ x: 0, opacity: 1, scale: 0.6 }}
                transition={{ duration: 1.5 }}
                className={`${styles.img} img-fluid`}
              />{" "}
            </Col>
          </Row>

          {/* <Card>
            <Card.Header>
              {" "}
              <motion.h1
                initial={{ x: 200, opacity: 0, scale: 0.5 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className={styles.text}
              >
                electricity
              </motion.h1>
            </Card.Header>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p>np
                  Technic Electric, enthusiast of technology, couples years
                  expirments on diffrent roles on coal power station and out of
                  it, self constructor e-bike, connection cables, fixing bugs,
                  developing systems, fully permission person in electricity,
                </p>
                <footer className='blockquote-footer'>
                  “I don't care that they stole my idea . . I care that they
                  don't have any of their own”
                  <cite title='Source Title'>― Nikola Tesla</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card> */}
          <blockquote className='blockquote mb-0'>
            <p>
              {/* <small>
                In Software developing im selftouch programmer, and student of
                Merito University on computer sience topic. I know javascript &
                typescript and couples frameworks, clean code principles and
                testing techniques.
              </small> */}
            </p>
            <footer className='blockquote-footer'>
              "software is a great combination between artistry and engineering"
              <cite title='Source Title'>Bill Gates</cite>
            </footer>
          </blockquote>
        </Container>

        <a href='#hero'>
          <button className={styles.heroBtn + " d-none d-md-block "}>
            {" "}
            Go top!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Software;
