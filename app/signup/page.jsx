"use client";

import { useFormik } from "formik";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";

import React, { useRef, useState } from "react";
import signupMutation from "../../utils/Mutations/signupMutation";
import signupValidationSchema from "../../utils/Validators/signupValidationSchema";
import Input from "../Components/Input/Input";
import Recaptcha from "../Components/ReCaptcha/Recaptcha";

const SignupForm = () => {
  const { mutate, isLoading, isError, isSuccess, error } = signupMutation();
  const router = useRouter();
  const [recaptchaError, setRecaptchaError] = useState("");
  const [token, setToken] = useState("");

  const { touched, errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: signupValidationSchema,

    onSubmit: (values) => {
      if (!token) {
        setRecaptchaError("are you MR.R0B0T? ");
        return;
      }
      mutate({ values, token });
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
          name='name'
          onChange={handleChange}
          value={values.name}
          touched={touched.name}
          error={errors.name}
        />
        <Input
          name='email'
          type='email'
          onChange={handleChange}
          value={values.email}
          touched={touched.email}
          error={errors.email}
        />
        <Input
          name='password'
          type='password'
          onChange={handleChange}
          value={values.password}
          touched={touched.password}
          error={errors.password}
        />
        <Input
          name='passwordConfirm'
          type='password'
          onChange={handleChange}
          value={values.passwordConfirm}
          touched={touched.passwordConfirm}
          error={errors.passwordConfirm}
        />
        <Recaptcha setToken={setToken} error={recaptchaError} />
        <button type='submit'>Submit</button>{" "}
      </form>
    </div>
  );
};

export default SignupForm;
