"use client";

import { useFormik } from "formik";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";

import React, { useRef, useState } from "react";
import signupMutation from "../../utils/Mutations/signupMutation";
import signupValidationSchema from "../../utils/Validators/signupValidationSchema";
import Input from "../Components/Input/Input";
import Recaptcha from "../Components/ReCaptcha/v2/RecaptchaV2";
import { infoToast, successToast, errorToast } from "../../utils/Toasts/Toast";
import Button from "../Components/Button/Button";

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
    let errorType = error.response.data.data.error.name;
    errorToast(errorType ? errorType : "smth went wrong");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <Recaptcha setToken={setToken} error={recaptchaError} />
        <Button type='submit'>Submit</Button>{" "}
      </form>
    </div>
  );
};

export default SignupForm;
