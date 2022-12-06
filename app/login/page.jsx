"use client";

import { useFormik } from "formik";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import Input from "../Components/Input/Input";
import { infoToast, successToast, errorToast } from "../../utils/Toasts/Toast";
import Button from "../Components/Button/Button";
import loginValidationSchema from "../../utils/Validators/loginVaidationSchema";
import { signIn } from "next-auth/react";
import Link from "next/link";
const LoginForm = () => {
  const router = useRouter();
  const [validateError, setValidateError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const { touched, errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,

    onSubmit: async (values) => {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result.error) {
        setValidateError(result.error);
      }

      if (result.ok) {
        router.push("/");
        setIsLogin(true);
      }
    },
  });

  useEffect(() => {
    if (validateError) {
      errorToast(validateError);
    }
    if (isLogin) {
      successToast("are you login in! ");
    }
  }, [validateError, isLogin]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {validateError && <h3 className={styles.error}> {validateError}</h3>}
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
        <Button type='submit'>Submit</Button>{" "}
      </form>
      <div className={styles.link}>
        <Link href={"/register"}>Do you like register ? </Link>
      </div>
    </div>
  );
};

export default LoginForm;
