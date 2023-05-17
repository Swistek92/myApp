"use client";

import React, { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./styles.module.css";

const Recaptcha = ({ setToken, error, isError }) => {
  const reCaptchaApiKey = "6Lck1jojAAAAAKxiC9GpeTfhUbrzZcCVbDHhJdJv";
  const refRec = useRef();

  const changeToken = () => {
    const token = refRec.current.getValue();
    return setToken(token);
  };

  useEffect(() => {
    if (isError) {
      refRec.current.reset(refRec.current.getWidgetId());
      setToken("");
    }
  }, [isError]);

  return (
    <>
      <ReCAPTCHA
        onChange={changeToken}
        ref={refRec}
        sitekey={reCaptchaApiKey}
        theme='dark'
        type='image'
        size='compact'
      />
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
};

export default Recaptcha;
