"use client";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.aboutHeader}> ABOUT ME </h3>
        <div className={styles.imgs}>
          <motion.img
            src='https://res.cloudinary.com/dftyei6oe/image/upload/v1660897748/natours/ilnfox5yc0jfnayxl8pw.png'
            width={300}
            height={300}
            alt='laala'
            initial={{ x: -200, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={styles.img}
          />
          <motion.img
            src='https://res.cloudinary.com/dftyei6oe/image/upload/v1683225708/electricity.0_rumzld.webp'
            width={300}
            height={300}
            alt='laala'
            initial={{ x: 200, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={styles.img}
          />
        </div>
        <motion.h1
          initial={{ x: 200, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.text}
        >
          electricity
        </motion.h1>
        <motion.p
          initial={{ x: -200, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.text}
        >
          Technic Electric, enthusiast of technology, couples years expirments
          on diffrent roles on coal power station and out of it, self
          constructor e-bike, connection cables, fixing bugs, developing
          systems, fully permission person in electricity
        </motion.p>
        <motion.h1
          initial={{ x: 200, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.text}
        >
          software
        </motion.h1>
        <motion.p
          initial={{ x: -200, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.text}
        >
          In Software developing im selftouch programmer, and student of Merito
          University on computer sience topic. I know javascript & typescript
          and couples frameworks, clean code principles and testing techniques.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
