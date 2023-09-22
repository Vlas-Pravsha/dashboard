import React from "react";
import s from "./Input.module.scss";

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <div>
      <input type="text" className={s.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
