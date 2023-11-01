import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "secondary" | "default" | "third";
}
const Button = ({ children, type, onClick }: ButtonProps) => {
  const btnType = type || "default";

  return (
    <div className={s.wrapper}>
      <button className={`${s[btnType]}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
