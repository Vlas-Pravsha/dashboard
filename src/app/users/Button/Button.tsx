import Image from "next/image";
import React from "react";
import s from "./Button.module.scss";
import Delete from "../../../assets/Img/UsersImg/trash.svg";
import Edit from "../../../assets/Img/UsersImg/editUser.svg";
import Left from "../../../assets/Img/UsersImg/chevron-left-solid.svg";
import Right from "../../../assets/Img/UsersImg/chevron-right-solid.svg";

interface ButtonProps {
  children: React.ReactNode;
  type?: "secondary" | "default" | "previous" | "next";
  onClick?: () => void;
}
const Button = ({ children, type, onClick }: ButtonProps) => {
  const btnType = type || "default";
  return (
    <>
      {type === "secondary" && (
        <button className={`${s[btnType]}`} onClick={onClick}>
          <div className={s.wrapper}>
            <Image src={Delete} alt="Delete" className={s.delete} />
            {children}
          </div>
        </button>
      )}
      {type === "previous" && (
        <button className={`${s[btnType]}`}>
          <div className={s.wrapper}>
            <Image src={Left} alt="Left" className={s.back} />
            {children}
          </div>
        </button>
      )}
      {type === "next" && (
        <button className={`${s[btnType]}`}>
          <div className={s.wrapper}>
            {children}
            <Image src={Right} alt="Right" className={s.to} />
          </div>
        </button>
      )}
      {type === "default" && (
        <button className={`${s[btnType]}`}>
          <div className={s.wrapper}>
            <Image src={Edit} alt="Edit" className={s.edit} />
            {children}
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
