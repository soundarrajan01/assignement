import { Input } from "antd";
import React from "react";
import styles from "./CommonInput.module.css";
export default function CommonInput({
  title,
  placeholder,
  value,
  name,
  onChange,
  errors,
}) {
  return (
    <div>
      <p className={styles.titleText}>{title}</p>
      <Input
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
