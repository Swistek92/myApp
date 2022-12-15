"use client";

import { useFormik } from "formik";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import Input from "../../Input/Input";
// import { infoToast, successToast, errorToast } from "../../utils/Toasts/Toast";
import Button from "../../Buttons/Button";
import changePasswordValidationSchema from "../../../../utils/Validators/changePasswordValidationSchema";
import { signIn } from "next-auth/react";
const ChangePassword = () => {
  const router = useRouter();
  const [validateError, setValidateError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const { touched, errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      passwordCorfim: "",
    },
    validationSchema: changePasswordValidationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  // useEffect(() => {
  //   if (validateError) {
  //     errorToast(validateError);
  //   }
  //   if (isLogin) {
  //     successToast("are you login in! ");
  //   }
  // }, [validateError, isLogin]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {validateError && <h3 className={styles.error}> {validateError}</h3>}
        <Input
          label='current password'
          name='currentPassword'
          type='password'
          onChange={handleChange}
          value={values.currentPassword}
          touched={touched.currentPassword}
          error={errors.currentPassword}
        />
        <Input
          label='new password '
          name='password'
          type='password'
          onChange={handleChange}
          value={values.password}
          touched={touched.password}
          error={errors.password}
        />
        <Input
          label='corfim your new password '
          name='passwordCorfim'
          type='password'
          onChange={handleChange}
          value={values.passwordConfirmation}
          touched={touched.passwordConfirmation}
          error={errors.passwordConfirmation}
        />
        <Button type='submit'>Submit</Button>{" "}
      </form>
    </div>
  );
};

export default ChangePassword;
