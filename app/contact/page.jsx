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

import Input from "../Components/Input/Input";

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

    onSubmit: (values) => {
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
        <Input
          name='email'
          onChange={handleChange}
          value={values.email}
          touched={touched.email}
          error={errors.email}
        />
        <Input
          name='name'
          onChange={handleChange}
          value={values.name}
          touched={touched.name}
          error={errors.name}
        />
        <Input
          name='topic'
          onChange={handleChange}
          value={values.topic}
          touched={touched.topic}
          error={errors.topic}
        />
        <Input
          name='content'
          onChange={handleChange}
          value={values.content}
          touched={touched.content}
          error={errors.content}
          textarea={true}
        />
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
