import React from "react";
import { FieldError } from "react-hook-form";
import s from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  hasError?: FieldError | undefined;
  type?: "password" | "text";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function InputComponent({ placeholder, hasError, type, ...rest }, ref) {
    const inputType = type || "text";

    return (
      <>
        <input
          ref={ref}
          type={inputType}
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
