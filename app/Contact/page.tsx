"use client";

import { useFormik } from "formik";
import contactValidationSchema from "@/utils/validators/contactValidationSchema";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import React from "react";
import { useState } from "react";

import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Input/Input";
import Recaptcha from "@/Components/ReCaptcha/v2/RecaptchaV2";
import Spinner from "@/Components/Spinner/Spinner";
import Success from "@/Components/Alerts/Success/Success";
import { SocialIcon } from "react-social-icons";

const ContactForm = () => {
  const router = useRouter();
  const [recaptchaError, setRecaptchaError] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("");
  const [isError, SetIsError] = useState(false);
  const { touched, errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      topic: "",
      content: "",
    },
    enableReinitialize: true,
    validationSchema: contactValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      if (!token) {
        setRecaptchaError("are you MR.R0B0T? ");
        return;
      } else {
        setRecaptchaError("");
      }
      setStatus("loading");
      SetIsError(false);
      try {
        const post = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, token }),
        });
        const res = await post.json();
        console.log(res.success, res);
        if (res.status === "success") {
          setStatus("success");
          setTimeout(() => {
            router.push("/");
          }, 10000);
        } else {
          SetIsError(true);
          setStatus("");
        }
      } catch (error) {
        setStatus("");
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <SocialIcon
          className={`${styles.icon} icon`}
          url='https://youtube.com/swistek00'
          target='_blank'
        />
        <SocialIcon
          className={`${styles.icon} icon`}
          url='https://www.facebook.com/Swistekk'
          target='_blank'
        />
        <SocialIcon
          className={`${styles.icon} icon`}
          url='https://www.instagram.com/swistoklik_/'
          target='_blank'
        />
      </div>
      {status === "loading" && <Spinner />}
      {status === "success" && <Success />}
      <form
        className={`${styles.form} ${status === "success" && styles.disabled}`}
        onSubmit={handleSubmit}
      >
        <Input
          name='email'
          type='email'
          onChangeInput={handleChange}
          value={values.email}
          touched={touched.email}
          error={errors.email}
          disabled={status === "success"}
        />
        <Input
          name='name'
          type='text'
          onChangeInput={handleChange}
          value={values.name}
          touched={touched.name}
          error={errors.name}
          disabled={status === "success"}
        />
        <Input
          name='topic'
          type='text'
          onChangeInput={handleChange}
          value={values.topic}
          touched={touched.topic}
          error={errors.topic}
          disabled={status === "success"}
        />

        <Input
          name='content'
          type='text'
          value={values.content}
          touched={touched.content}
          error={errors.content}
          onChangeTextArea={handleChange}
          textarea={true}
          disabled={status === "success"}
        />
        <Recaptcha
          setToken={setToken}
          error={recaptchaError}
          isError={isError}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
