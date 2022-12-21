"use client";

import { useFormik } from "formik";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import Input from "../../Components/Input/Input";
import {
  infoToast,
  successToast,
  errorToast,
} from "../../../utils/Toasts/Toast";
import Button from "../../Components/Buttons/Button";
import loginValidationSchema from "../../../utils/Validators/loginVaidationSchema";
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
const LoginForm = () => {
  const { data: session, status } = useSession();

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
        return setValidateError(result.error);
      }
    },
  });

  useEffect(() => {
    if (status === "loading") {
      return <p>loading...</p>;
    }

    if (status === "authenticated") {
      setIsLogin(true);
    }
    if (validateError) {
      errorToast(validateError);
    }
    if (isLogin) {
      successToast("are you login in! ");
      router.push("/");
    }
  }, [validateError, isLogin, status]);

  console.log(process.env.VERCEL_URL);
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
        <Button type='submit'>Submit</Button>
      </form>
      <div className={styles.link}>
        <Link href='/auth/signin/facebook'> login fb</Link>
      </div>
      <div className={styles.link}>
        <Link href={"/register"}>Do you like register ? </Link>
      </div>
      <div>
        <button
          onClick={() =>
            signIn("facebook", {
              callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
            })
          }
        >
          Sign in with facebook
        </button>
      </div>{" "}
      <div>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
            })
          }
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
