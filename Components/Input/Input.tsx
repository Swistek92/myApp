import React from "react";
import styles from "./styles.module.css";

type InputProps = {
  name: string;
  type: string;
  onChangeInput?: React.ChangeEventHandler<HTMLInputElement>;
  onChangeTextArea?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
  label?: string;
  textarea?: boolean;
};

const Input = ({
  name,
  type,
  onChangeInput,
  onChangeTextArea,
  value,
  touched,
  error,
  textarea,
  label,
  disabled,
}: InputProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}> {label ? label : name}</label>
      {!textarea ? (
        <input
          id={name}
          name={name}
          type={type}
          onChange={onChangeInput}
          value={value}
          disabled={disabled}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          onChange={onChangeTextArea}
          value={value}
          disabled={disabled}
        />
      )}
      {touched && error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
