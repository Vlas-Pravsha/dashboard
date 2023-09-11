import React from "react";
import { FieldError } from "react-hook-form";
import s from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  hasError?: FieldError | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function InputComponent({ placeholder, hasError, ...rest }, ref) {
    return (
      <>
        <input
          ref={ref}
          type="text"
          className={`${hasError ? s.error : s.input}`}
          {...rest}
          placeholder={placeholder}
        />
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;
