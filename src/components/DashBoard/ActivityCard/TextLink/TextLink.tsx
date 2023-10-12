import React from "react";
import s from "./TextLink.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

interface TextLinkProps {
  children: React.ReactNode;
}

const TextLink = ({ children }: TextLinkProps) => {
  return (
    <a href="/" className={s.textLinkWrapper}>
      <span className={s.text}>{children}</span>
      <FaLongArrowAltRight className={s.svg} />
    </a>
  );
};

export default TextLink;
