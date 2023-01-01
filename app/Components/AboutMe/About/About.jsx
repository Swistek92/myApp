import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <Image
        src='https://res.cloudinary.com/dftyei6oe/image/upload/v1672615934/IMG_6319_ybkxdy.jpg'
        width={500}
        height={500}
        alt='laala'
      />
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit enim
        nesciunt iste placeat animi est dolorem ipsum doloribus soluta,
        praesentium tempora a dignissimos consequuntur minus nostrum? Mollitia
        non obcaecati voluptatem debitis quia nam. Doloremque nam facilis, ea,
        reiciendis, minus libero veniam sint assumenda vero nobis similique ut
        officiis excepturi voluptatibus quaerat eveniet qui optio pariatur
        voluptate expedita natus cupiditate dolorem totam perspiciatis.
        Veritatis dolor, atque doloremque ab facilis consequatur quod minima
      </h1>
    </div>
  );
};

export default About;
