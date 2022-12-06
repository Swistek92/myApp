"use client";

import { useFormik } from "formik";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import signupMutation from "../../utils/Mutations/signupMutation";
import signupValidationSchema from "../../utils/Validators/signupValidationSchema";
import Input from "../Components/Input/Input";
import { infoToast, successToast, errorToast } from "../../utils/Toasts/Toast";
import ReCAPTCHA from "react-google-recaptcha";
import RecaptchaComponent from "../Components/ReCaptcha/v2/RecaptchaV2";
import Button from "../Components/Button/Button";
import Link from "next/link";

const SignupForm = () => {
  const reCaptchaApiKey = "6Lck1jojAAAAAKxiC9GpeTfhUbrzZcCVbDHhJdJv";
  const { mutate, isLoading, isError, isSuccess, error } = signupMutation();
  const router = useRouter();
  const [recaptchaError, setRecaptchaError] = useState("");
  const [validateError, setValidateError] = useState("");
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
      mutate({ ...values, token });
    },
  });

  useEffect(() => {
    if (isLoading) {
      infoToast("🦄 Wait Wait Wait sending...  ");
    }

    if (isSuccess) {
      successToast("🦄 Done ! Now you can LogIN!!");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }

    if (isError) {
      console.log(error.response.data.data.error.errors);
      const errorMSg = error.response.data.data.error.errors.name.message
        ? error.response.data.data.error.errors.name.message
        : "smth went wrong";
      setValidateError(errorMSg);
      errorToast(errorMSg);
    } else {
      setValidateError("");
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {validateError && <h3 className={styles.error}> {validateError}</h3>}
        <Input
          name='name'
          type='text'
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
          label={"password Confirm"}
          value={values.passwordConfirm}
          touched={touched.passwordConfirm}
          error={errors.passwordConfirm}
        />
        <RecaptchaComponent
          setToken={setToken}
          error={recaptchaError}
          isError={isError}
        />
        <Button type='submit'>Submit</Button>{" "}
      </form>

      <div className={styles.link}>
        <Link href={"/login"}>do you like login? </Link>
      </div>
    </div>
  );
};

export default SignupForm;
