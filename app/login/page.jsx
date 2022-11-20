"use client";

import React from "react";

import { Formik, Field, Form } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";

const DisplayingErrorMessagesSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string().min(2, "too short"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const page = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && (
          <span className={styles.error}>{formik.errors.firstName}</span>
        )}
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default page;
