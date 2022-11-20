"use client";

import React from "react";

import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import styles from "./signup.module.css";
import { useMutation } from "react-query";

import axios from "axios";

const DisplayingErrorMessagesSchema = Yup.object({
  name: Yup.string()
    .min(5, "Too Short!, at last 5 characters")
    .max(50, "Too Long!, max 50 characters")
    .required("first name is required"),
  password: Yup.string()
    .min(5, "Too Short!, at last 5 characters")
    .max(50, "Too Long!, max 50 characters")
    .required("password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("passwordConfirm is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
});

const page = () => {
  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: (user) => {
      return axios.post("/api/auth/signup", user);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: async (values) => {
      console.log(values);
      mutate(values);
    },
  });

  return (
    <div className={styles.container}>
      {isLoading && <h1> LOADING</h1>}
      {isError && <h1> Error</h1>}
      {isSuccess && <h1> DONE</h1>}

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor='firstName'> Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        {formik.errors.name && (
          <span className={styles.error}>{formik.errors.name}</span>
        )}

        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.errors.email && (
          <span className={styles.error}>{formik.errors.email}</span>
        )}

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <span className={styles.error}>{formik.errors.password}</span>
        )}
        <label htmlFor='passwordConfirm'>passwordConfirm</label>

        <input
          id='passwordConfirm'
          name='passwordConfirm'
          type='password'
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
        />
        {formik.errors.passwordConfirm && (
          <span className={styles.error}>{formik.errors.passwordConfirm}</span>
        )}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default page;
