import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
const Skill = ({ directionLeft }) => {
  return (
    <div className={styles.container}>
      <motion.img
        className={styles.icon}
        initial={{ x: directionLeft ? -50 : 50, opacity: 0.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9LM1P7ubfbsz8ejn7Dmw9ORZ-9zMLm3F5isp_SYZscUvAC0KNI4QPRG38tb5LdqZnrE&usqp=CAU'
      />
      <div className={styles.skills}>
        <div className={styles.procentContainer}>
          <p className={styles.procent}>100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
