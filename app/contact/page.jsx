"use client";

import { useFormik } from "formik";
import contactValidationSchema from "../../utils/FontValidationSchema/contactValidationSchema";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./styles.module.css";
import React from "react";
import sendEmailMutation from "../../utils/Mutations/sendEmailMutation";
import { useRef } from "react";
import { useState } from "react";

const ContactForm = () => {
  const { mutate, isLoading, isError, isSuccess, error } = sendEmailMutation();
  const router = useRouter();
  const reCaptchaApiKey = "6Lck1jojAAAAAKxiC9GpeTfhUbrzZcCVbDHhJdJv";
  const reRef = useRef();
  const [captchaErrror, setCaptchaErrror] = useState();
  const { touched, errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      topic: "",
      content: "",
    },
    validationSchema: contactValidationSchema,

    onSubmit: async (values) => {
      const token = reRef.current.getValue();
      if (!token) {
        setCaptchaErrror("are you Mr.ROBOT ? -_- soo prove it!  ");
        return;
      }
      setCaptchaErrror("");
      mutate({ ...values, token });
    },
  });
  const pushToHomePage = () =>
    setTimeout(() => {
      router.push("/");
    }, 1000);

  return (
    <div className={styles.container}>
      {isLoading && <h1> LOADING</h1>}
      {isError && <h1> Error Http</h1>}
      {isSuccess && <h1> DONE </h1> && pushToHomePage()}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='email'> your email</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && (
          <span className={styles.error}>{errors.email}</span>
        )}
        <label htmlFor='name'> your name</label>
        <input
          id='name'
          name='name'
          type='string'
          onChange={handleChange}
          value={values.name}
        />
        {touched.name && errors.name && (
          <span className={styles.error}>{errors.name}</span>
        )}
        <label htmlFor='topic'>Topic</label>
        <input
          id='topic'
          name='topic'
          type='string'
          onChange={handleChange}
          value={values.topic}
        />
        {touched.topic && errors.topic && (
          <span className={styles.error}>{errors.topic}</span>
        )}
        <label htmlFor='content'>Message</label>
        <textarea
          rows={4}
          id='content'
          name='content'
          type='string'
          onChange={handleChange}
          value={values.content}
        />
        {touched.content && errors.content && (
          <span className={styles.error}>{errors.content}</span>
        )}
        <ReCAPTCHA
          ref={reRef}
          sitekey={reCaptchaApiKey}
          theme='dark'
          type='image'
          size='compact'
        />
        {captchaErrror && (
          <span className={styles.error}> {captchaErrror}</span>
        )}
        <button type='submit'>Submit</button>{" "}
      </form>
    </div>
  );
};

export default ContactForm;
