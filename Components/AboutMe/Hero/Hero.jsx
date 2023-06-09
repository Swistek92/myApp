"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles/BackgroundCircles";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "photography",
      "website creator",
      "software development",
      "content creator",
    ],
    loop: true,
    delaySpeed: 500,
  });
  return (
    <div className={styles.container}>
      <BackgroundCircles />
      <motion.img
        src='https://res.cloudinary.com/dftyei6oe/image/upload/v1686267935/352579223_1063919221658423_6563206581768475290_n_zasbed.jpg'
        className={styles.face}
        initial={{ rotate: 1200 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration: 1 }}
        alt='asd'
      />
      <div className={styles.text}>
        <h2></h2>
        <h1 className={styles.textHeader}>
          {text} <Cursor cursorColor='black' />
        </h1>
      </div>
      {/* <div className={styles.heroBtns}>
        <a href='#electricity' scroll='false'>
          <button className={styles.heroBtn}>Electricity</button>
        </a>
        <a href='#software' scroll='false'>
          <button className={styles.heroBtn}>Software</button>
        </a>
        <a href='#skills' scroll='false'>
          <button className={styles.heroBtn}> _</button>
        </a>
        <a href='#projects' scroll='false'>
          <button className={styles.heroBtn}> _</button>
        </a>
      </div> */}
    </div>
  );
};

export default Hero;
