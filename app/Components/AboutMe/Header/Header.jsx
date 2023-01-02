"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.icons}
        >
          <SocialIcon
            className={styles.icon}
            url='https://youtube.com/swistek00'
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
          />
          <SocialIcon
            className={styles.icon}
            fgColor='gray'
            bgColor='transparent'
            url='https://www.facebook.com/Swistekk'
            target='_blank'
          />
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.email}
        >
          <SocialIcon
            className={styles.icon}
            network='email'
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
            style={{ zIndex: 9999999 }}
          />
          <p className={styles.touch}>contact</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
