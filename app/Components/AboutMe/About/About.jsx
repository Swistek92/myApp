"use client";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.aboutHeader}> ABOUT </h3>
        <motion.img
          src='https://res.cloudinary.com/dftyei6oe/image/upload/v1672615934/IMG_6319_ybkxdy.jpg'
          width={800}
          height={800}
          alt='laala'
          initial={{ x: -200, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.img}
        />
        <motion.h1
          initial={{ x: 200, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.text}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          enim nesciunt iste placeat animi est dolorem ipsum doloribus soluta,
          praesentium tempora a dignissimos consequuntur minus nostrum? Mollitia
          non obcaecati voluptatem debitis quia nam. Doloremque nam facilis, ea,
          reiciendis, minus libero veniam sint assumenda vero nobis similique ut
          officiis excepturi voluptatibus quaerat eveniet qui optio pariatur
          voluptate expedita natus cupiditate dolorem totam perspiciatis.
          Veritatis dolor, atque doloremque ab facilis consequatur quod minima
        </motion.h1>
      </div>
    </div>
  );
};

export default About;
