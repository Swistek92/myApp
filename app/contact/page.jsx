"use client";

import { useFormik } from "formik";
import contactValidationSchema from "../../utils/Validators/contactValidationSchema";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./styles.module.css";
import React from "react";
import sendEmailMutation from "../../utils/Mutations/sendEmailMutation";
import { useState } from "react";

import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import Recaptcha from "../Components/ReCaptcha/v2/RecaptchaV2";
import { successToast, infoToast, errorToast } from "../../utils/Toasts/Toast";

const ContactForm = () => {
  const router = useRouter();
  const [recaptchaError, setRecaptchaError] = useState("");
  const [token, setToken] = useState("");
  const { mutate, isLoading, isError, isSuccess, error } = sendEmailMutation();
  const { touched, errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      topic: "",
      content: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      if (!token) {
        setRecaptchaError("are you MR.R0B0T? ");
        return;
      }
      mutate({ ...values, token });
    },
  });

  if (isLoading) {
    infoToast("🦄 Wait Wait Wait sending...  ");
  }

  if (isSuccess) {
    successToast("🦄 Done ! we send a email!");
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }

  if (isError) {
    errorToast("smth went wrong");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name='email'
          type='email'
          onChange={handleChange}
          value={values.email}
          touched={touched.email}
          error={errors.email}
        />
        <Input
          name='name'
          type='text'
          onChange={handleChange}
          value={values.name}
          touched={touched.name}
          error={errors.name}
        />
        <Input
          name='topic'
          type='text'
          onChange={handleChange}
          value={values.topic}
          touched={touched.topic}
          error={errors.topic}
        />

        <Input
          name='content'
          type='text'
          onChange={handleChange}
          value={values.content}
          touched={touched.content}
          errr={errors.content}
          textarea={true}
        />
        <Recaptcha setToken={setToken} error={recaptchaError} />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
