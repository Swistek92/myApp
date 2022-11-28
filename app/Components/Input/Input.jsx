import React from "react";
import styles from "./styles.module.css";
const Input = ({ name, type, onChange, value, touched, error, textarea }) => {
  return (
    <>
      <label htmlFor={name}> {name}</label>
      {!textarea ? (
        <input
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
        />
      )}
      {touched && error && <span className={styles.error}>{error}</span>}
    </>
  );
};

export default Input;
