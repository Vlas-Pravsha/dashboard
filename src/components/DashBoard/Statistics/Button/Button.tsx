import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "secondary" | "button" | undefined;
  onClick?: () => void;
}
const Button = ({ children, type, onClick }: ButtonProps) => {
  const btnType = type || "button";

  return (
    <button className={s[btnType]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
