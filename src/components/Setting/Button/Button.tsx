import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "secondary" | "default" | "third";
  onClick?: () => void;
}
const Button = ({ children, type, onClick }: ButtonProps) => {
  const btnType = type || "default";
  return (
    <div>
      <button className={`${s.button} ${s[btnType]}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
