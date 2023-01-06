import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.container}
    >
      <h3 className={styles.header}>Experience</h3>

      <div className={styles.cards}>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;

//  <div className={styles.container}>
//    <h1 className={styles.header}>Experience ???</h1>
//    <img
//      className={styles.img}
//      alt='u will not now.'
//      src='https://res.cloudinary.com/dftyei6oe/image/upload/v1672625845/anon-841x473_tbhkwo.jpg'
//    />
//  </div>;
// .container {
//   height: 100vh;
//   position: relative;
//   top: 10vh;
//   padding-top: 2vh;

//   display: flex;
//   /* flex-direction: column; */
//   align-items: center;
//   justify-content: center;
// }
// .header {
//   position: absolute;
//   top: 10vh;
//   font-size: 2rem;
//   letter-spacing: 1rem;
//   /* width: 100px; */
//   /* height: 100px; */
// }
// .img {
//   position: absolute;
//   left: 0;
//   right: 0;
//   border-radius: 999999px;
//   margin: 0 auto;
//   /* height: 40vh; */
//   /* width: 40vh; */
//   width: 40vh;
//   height: 40vh;
//   /* margin-top: 10vh; */
//   object-fit: cover;
//   animation: donnoSpin 0.5s infinite linear;
// }

// @keyframes donnoSpin {
//   0% {
//     transform: rotate(-20deg);
//   }

//   20% {
//     transform: rotate(0);
//   }

//   40% {
//     transform: rotate(20deg);
//   }

//   60% {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(-20deg);
//   }
// }
// @media (min-width: 900px) and (max-height: 800px) {
//   .container {
//     top: 10vh;
//   }
// }
