"use client";
import React from "react";
import About from "../Components/AboutMe/About/About";
import Header from "../Components/AboutMe/Header/Header";
import Hero from "../Components/AboutMe/Hero/Hero";
import Experience from "../Components/AboutMe/Experience/Experience";
import styles from "./styles.module.css";
import Projects from "../Components/AboutMe/Projects/Projects";
const page = () => {
  return (
    <div>
      <Header className={styles.header} />
      <div className={styles.container}>
        <section id='hero' className={styles.snapStart}>
          <Hero />
        </section>
      </div>
    </div>
  );
};

export default page;

