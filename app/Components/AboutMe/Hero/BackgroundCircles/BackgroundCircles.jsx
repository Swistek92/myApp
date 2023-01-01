import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "10%", "50%", "100%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className={styles.container}
    >
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3} />
      <div className={styles.div4} />
      <div className={styles.div5} />
    </motion.div>
  );
};

export default BackgroundCircles;
