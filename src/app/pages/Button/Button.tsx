import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <Link href="/">
      <button className={s.default}>
        <Image
          src="/Img/PagesImg/chevron-left-solid.svg"
          alt="Img"
          height="20"
          width="20" className={s.icon}
        />
        {children}
      </button>
    </Link>
  );
};

export default Button;
