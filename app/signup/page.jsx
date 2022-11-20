"use client";

import React from "react";

import { useFormik } from "formik";
import styles from "./signup.module.css";
import signupValidationSchema from "./signupValidationSchema";
import signupMutation from "../../utils/signupMutation";

const page = () => {
  const { mutate, isLoading, isError, isSuccess, handleSubmit } =
    signupMutation();

  const { touched, errors, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      mutate(values);
    },
  });

  return (
    <div className={styles.container}>
      {isLoading && <h1> LOADING</h1>}
      {isError && <h1> Error</h1>}
      {isSuccess && <h1> DONE</h1>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='name'> Name</label>
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
          <span className={styles.error}>{formik.errors.email}</span>
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

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default page;
