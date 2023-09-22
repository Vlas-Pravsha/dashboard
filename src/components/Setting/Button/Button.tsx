import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "secondary" | "default" | "third";
}
const Button = ({ children, type }: ButtonProps) => {
  const btnType = type || "default";
  return (
    <div>
      <button className={`${s.button} ${s[btnType]}`}>{children}</button>
    </div>
  );
};

export default Button;
