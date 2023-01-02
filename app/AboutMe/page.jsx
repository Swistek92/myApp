import React from "react";
import About from "../Components/AboutMe/About/About";
import Header from "../Components/AboutMe/Header/Header";
import Hero from "../Components/AboutMe/Hero/Hero";
import Experience from "../Components/AboutMe/Experience/Experience";
import styles from "./styles.module.css";
const page = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <section id='hero' className={styles.snapStart}>
        <Hero />
      </section>
      <section id='about' className={styles.snapCenter}>
        <About />
      </section>
      <section id='experience' className={styles.snapEnd}>
        <Experience />
      </section>
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
