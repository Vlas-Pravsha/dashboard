import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import s from "./Label.module.scss";

interface labelProps {
  children: ReactNode;
  text?: string;
  title?: string;
  errorText?: string;
  hasError?: FieldError | undefined;
}

const Label = ({ children, text, errorText, hasError, title }: labelProps) => {
  return (
    <>
      <label className={s.label}>
        <h3 className={s.title}>{title}</h3>
        {children}
        {hasError ? <span className={s.errorText}>{errorText}</span> : null}
      </label>
    </>
  );
};
export default Label;
