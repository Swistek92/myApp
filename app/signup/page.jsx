"use client";

import { useFormik } from "formik";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";

import React from "react";
import signupMutation from "../../utils/Mutations/signupMutation";
import signupValidationSchema from "../../utils/FontValidationSchema/signupValidationSchema";

const SignupForm = () => {
  const { mutate, isLoading, isError, isSuccess, error } = signupMutation();
  const router = useRouter();

  const { touched, errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: signupValidationSchema,

    onSubmit: (values) => {
      mutate(values);
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
        <label htmlFor='firstName'> Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={handleChange}
          value={values.name}
        />
        {touched.name && errors.name && (
          <span className={styles.error}>{errors.name}</span>
        )}
        <label htmlFor='email'>Email Address</label>
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
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={handleChange}
          value={values.password}
        />
        {touched.password && errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
        <label htmlFor='passwordConfirm'>passwordConfirm</label>
        <input
          id='passwordConfirm'
          name='passwordConfirm'
          type='password'
          onChange={handleChange}
          value={values.passwordConfirm}
        />
        {touched.passwordConfirm && errors.passwordConfirm && (
          <span className={styles.error}>{errors.passwordConfirm}</span>
        )}
        <button type='submit'>Submit</button>{" "}
      </form>
    </div>
  );
};

export default SignupForm;
