import React from "react";
import s from "./Button.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

interface ButtonProps {
  children: React.ReactNode;
  type?: "secondary" | "default";
}
const Button = ({ children, type }: ButtonProps) => {
  const btnType = type || "default";

  return (
    <div className={s.wrapper}>
      <button className={`${s[btnType]}`}>
        {children}
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default Button;
