import React from "react";
import styles from "./styles.module.css";
const Input = ({
  name,
  type,
  onChange,
  value,
  touched,
  error,
  textarea,
  label,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}> {label ? label : name}</label>
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
    </div>
  );
};

export default Input;
