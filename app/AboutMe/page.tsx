// "use client";
import React from "react";
import styles from "./styles.module.css";
// import About from "../Components/AboutMe/About/About";
// import Header from "../Components/AboutMe/Header/Header";
// import Hero from "../Components/AboutMe/Hero/Hero";
// import Experience from "../Components/AboutMe/Experience/Experience";
// import Projects from "../Components/AboutMe/Projects/Projects";
import HeaderAbout from "../../Components/AboutMe/Header/HeaderAbout";
import Hero from "../../Components/AboutMe/Hero/Hero";
import Electricity from "../../Components/AboutMe/Electricity/Electricity";
import Software from "@/Components/AboutMe/Software/Software";
const page = () => {
  return (
    <div>
      <div className={styles.header}>
        <HeaderAbout />
      </div>
      <div className={styles.container}>
        <section id='hero' className={styles.snapStart}>
          <Hero />
        </section>
        {/* <section id='electricity' className={styles.snapEnd}>
          <Electricity />
        </section>
        <section id='software' className={styles.snapEnd}>
          <Software />
        </section> */}
      </div>
    </div>
  );
};

export default page;
