"use client";

import { useFormik } from "formik";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import Input from "@/Components/Input/Input";
// import {
//   infoToast,
//   successToast,
//   errorToast,
// } from "../../../utils/Toasts/Toast";
import Button from "@/Components/Buttons/Button";
import loginValidationSchema from "@/utils/validators/loginValidationSchema";
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";

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

      // if (result.error) {
      //   errorToast(result.error);
      //   return setValidateError(result.error);
      // }
      // if (result.ok) {
      //   router.push("/");
      // }
    },
  });

  // if (status === "loading") {
  //   return <p>loading...</p>;
  // }
  // if (status === "authenticated") {
  //   successToast("are you login in! ");

  //   return <h1>are you login!</h1>;
  // }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {validateError && <h3 className={styles.error}> {validateError}</h3>}

        <Input
          name='email'
          type='email'
          onChangeInput={handleChange}
          value={values.email}
          touched={touched.email}
          error={errors.email}
          disabled={false}
        />
        {/* <Input
          name='name'
          type='text'
          onChange={handleChange}
          value={values.name}
          touched={touched.name}
          error={errors.name}
          disabled={status === "success"}
        /> */}
        <Input
          name='password'
          type='password'
          onChangeInput={handleChange}
          value={values.password}
          touched={touched.password}
          error={errors.password}
        />
        <Button type='submit'>Submit</Button>
      </form>
      {/* <div>
        <Button
          onClick={() =>
            signIn("facebook", {
              callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
            })
          }
        >
          <h1>
            {" "}
            <AiFillFacebook />
          </h1>
          Sign in with facebook{" "}
        </Button> */}
      {/* </div>{" "} */}
      <div>
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
            })
          }
        >
          <h3>
            <AiOutlineGoogle />
          </h3>
          Sign in with google{" "}
        </Button>
      </div>
      <div className={styles.link}>
        <Link href={"/Register"}>Do you like register ? </Link>
      </div>
    </div>
  );
};

export default LoginForm;
