import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Skill from "./Skill/Skill";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.container}
    >
      <h3 className={styles.header}>Skills</h3>

      <h3 className={styles.subHeader}>
        hover over a skills for a currency profieciency
      </h3>

      <div className={styles.grid}>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
