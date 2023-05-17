import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";
const ExperienceCard = () => {
  return (
    <article className={styles.article}>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className={styles.img}
        src='https://res.cloudinary.com/dftyei6oe/image/upload/v1672864895/Projekt_bez_tytu%C5%82u_bxirno.jpg'
      />
      <div className={styles.descriptions}>
        <h4 className={styles.header}>CEO OF SWISTOKLIK</h4>
        <p className={styles.title}>Swistoklik</p>
        <div className={styles.tech}>
          <img
            className={styles.techIcon}
            src='https://www.clipartmax.com/png/small/470-4707396_javascript-icon-html-css-js-icons.png'
            alt='Javascript Icon - Html Css Js Icons @clipartmax.com'
          />{" "}
          <img
            className={styles.techIcon}
            src='https://www.clipartmax.com/png/small/470-4707396_javascript-icon-html-css-js-icons.png'
            alt='Javascript Icon - Html Css Js Icons @clipartmax.com'
          />
          <img
            className={styles.techIcon}
            src='https://www.clipartmax.com/png/small/470-4707396_javascript-icon-html-css-js-icons.png'
            alt='Javascript Icon - Html Css Js Icons @clipartmax.com'
          />
        </div>
        <p className={styles.times}>started work ... -ended ...</p>
        <ul className={styles.list}>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            magnam?
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            magnam?
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            magnam?
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
