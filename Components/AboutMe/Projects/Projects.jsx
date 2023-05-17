import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Projects</h3>

      <div className={styles.projects}>
        {projects.map((e, i) => {
          return (
            <div className={styles.project}>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className={styles.img}
                src='https://images.ctfassets.net/4cd45et68cgf/FJLXrcHViY5jAZYJLfXeg/22bb24c10cab4070c92806bbc8935379/Netflix_Games.png?w=2560'
              />

              <div>
                <h4 className={styles.case}>
                  case study {i + 1} of {projects.length} Ups clone
                </h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  magnam, corporis sed optio illo suscipit natus vitae quia
                  dolorem voluptas repellat dolores, nemo nihil impedit totam
                  nobis unde, facere et esse amet. Vitae obcaecati perspiciatis
                  fuga rem error ducimus nesciunt fugit ipsum neque quae
                  necessitatibus quidem, autem quibusdam corporis quo!
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.skew}></div>
    </div>
  );
};

export default Projects;
