"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles/BackgroundCircles";
import styles from "./styles.module.css";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Good morning,", "Dzien dobry,"],
    loop: true,
    delaySpeed: 500,
  });
  return (
    <div className={styles.container}>
      <BackgroundCircles />
      <Image
        src='https://res.cloudinary.com/dftyei6oe/image/upload/v1672527710/IMG_5986_j8zjzd.jpg'
        width={500}
        height={500}
        className={styles.face}
        alt='asd'
      />
      <div className={styles.text}>
        <h2>Software Engineer</h2>
        <h1 className={styles.textHeader}>
          {text} <Cursor cursorColor='yellow' />
        </h1>
      </div>
      <div className={styles.heroBtns}>
        <Link href='#about' scroll>
          <button className={styles.heroBtn}> About</button>
        </Link>
        <Link href='#experience'>
          <button className={styles.heroBtn}> Experience</button>
        </Link>
        <Link href='#skills'>
          <button className={styles.heroBtn}> Skills</button>
        </Link>
        <Link href='#projects'>
          <button className={styles.heroBtn}> Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
