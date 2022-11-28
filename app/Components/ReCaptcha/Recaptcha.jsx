"use client";

import React from "react";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({ setToken }) => {
  const reRef = useRef();

  const token = reRef.current.getValue();

  useEffect(() => {
    setToken(token);
  }, [token]);

  return (
    <ReCAPTCHA
      ref={reRef}
      sitekey={reCaptchaApiKey}
      theme='dark'
      type='image'
      size='compact'
    />
  );
};

export default Recaptcha;
