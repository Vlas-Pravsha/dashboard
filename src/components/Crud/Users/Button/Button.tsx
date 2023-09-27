import Image from "next/image";
import React from "react";
import s from "./Button.module.scss";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
          {type === "secondary" && <RiDeleteBin6Fill className={s.delete} />}
          {type === "previous" && <FaChevronLeft className={s.back} />}
          {type === "next" && <FaChevronRight className={s.to} />}
          {type === "default" && <FiEdit className={s.edit} />}
          {children}
        </div>
      </button>
    </>
  );
};

export default Button;
