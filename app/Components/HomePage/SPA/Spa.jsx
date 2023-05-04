import React from "react";
import styles from "./styles.module.css";
const Spa = () => {
  return (
    <div className={styles.Youtube}>
      <h1 className={styles.heading}>Single Page Aplication Creator</h1>
      <div className={styles.container}>
        <div className={styles.row1}>
          <p>
            A single page application is a website or web application that
            dynamically rewrites a current web page with new data from the web
            server, instead of the default method of a web browser loading
            entire new pages.
          </p>

          <p>
            This. applications work at the speed of light, never again will your
            customers have to wait for the page to load when they enter it
          </p>
        </div>
        <div className={styles.row2}>
          <h4>Technology stack</h4>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Node</li>
            <li>Express</li>
            <li>NextJs</li>
            <li>Teting Libarys</li>
            <li>much more...</li>
          </ul>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Spa;
