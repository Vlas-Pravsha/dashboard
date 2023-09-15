import Image from "next/image";
import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "secondary" | "default" | "previous" | "next";
  onClick?: () => void;
}
const Button = ({ children, type, onClick }: ButtonProps) => {
  const btnType = type || "default";
  return (
    <>
      <button className={`${s[btnType]}`} onClick={onClick}>
        <div className={s.wrapper}>
          {type === "secondary" && (
            <Image
              src={"/Img/UsersImg/trash.svg"}
              alt="Delete"
              className={s.delete}
              height="30"
              width="30"
            />
          )}
          {type === "previous" && (
            <Image
              src={"/Img/UsersImg/chevron-left-solid.svg"}
              alt="Left"
              className={s.back}
              height="30"
              width="30"
            />
          )}
          {type === "next" && (
            <Image
              src={"/Img/UsersImg/chevron-right-solid.svg"}
              alt="Right"
              className={s.to}
              height="30"
              width="30"
            />
          )}
          {type === "default" && (
            <Image
              src={"/Img/UsersImg/editUser.svg"}
              alt="Edit"
              className={s.edit}
              height="30"
              width="30"
            />
          )}
          {children}
        </div>
      </button>
    </>
  );
};

export default Button;
