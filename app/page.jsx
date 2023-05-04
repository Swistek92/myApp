"use client";
import Header from "./Components/HomePage/Header/Header";
import Main from "./Components/HomePage/Main/Main";
import styles from "./page.module.css";

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
export default function Page() {
  const { ref: ref1, inView: element1 } = useInView();
  const { ref: ref2, inView: element2 } = useInView();
  const { ref: ref3, inView: element3 } = useInView();
  const { ref: ref4, inView: element4 } = useInView();

  return (
    <>
      <div className={styles.container}>
        <Header innerRef={ref1} myElementIsVisible={element1} />
        <Main innerRef={ref2} myElementIsVisible={element2} />
        {/* <Header innerRef={ref3} myElementIsVisible={element3} /> */}
        {/* <Main innerRef={ref4} myElementIsVisible={element4} /> */}
      </div>
    </>
  );
}
