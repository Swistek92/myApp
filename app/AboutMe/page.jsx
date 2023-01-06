"use client";
import React from "react";
import About from "../Components/AboutMe/About/About";
import Header from "../Components/AboutMe/Header/Header";
import Hero from "../Components/AboutMe/Hero/Hero";
import Experience from "../Components/AboutMe/Experience/Experience";
import styles from "./styles.module.css";
import Skills from "../Components/AboutMe/Skills/Skills";
import Projects from "../Components/AboutMe/Projects/Projects";
const page = () => {
  return (
    <div>
      <Header className={styles.header} />
      <div className={styles.container}>
        <section id='hero' className={styles.snapStart}>
          <Hero />
        </section>
        <section id='about' className={styles.snapCenter}>
          <About />
        </section>
        <section id='experience' className={styles.snapEnd}>
          <Experience />
        </section>
        <section id='skills' className={styles.snapCenter}>
          <Skills />
        </section>
        <section id='projects' className={styles.snapCenter}>
          <Projects />
        </section>
      </div>
    </div>
  );
};

export default page;

// <Header />
// <div id='hero' className={`$ ${styles.snap}`}>
// </div>
// <div id='hero2' className={` ${styles.snap}`}>
//   <Hero />
// </div>
