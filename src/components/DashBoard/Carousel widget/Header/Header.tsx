import React from "react";
import s from "./Header.module.scss";
import { BsFillRocketTakeoffFill } from "react-icons/bs"; // rocket
import { BsFire } from "react-icons/bs";
import { BiSolidBook } from "react-icons/bi";
interface HeaderProps {
  children: React.ReactNode;
  type: string;
}

const Header = ({ children, type }: HeaderProps) => {
  return (
    <>
      {type === "Tips to grow" && (
        <div className={s.grow}>
          <BsFillRocketTakeoffFill className={s.svg} />
          {children}
        </div>
      )}
      {type === "Features" && (
        <div className={s.features}>
          <BsFire className={s.svg} />
          {children}
        </div>
      )}
      {type === "Insights" && (
        <div className={s.insights}>
          <BiSolidBook className={s.svg} />
          {children}
        </div>
      )}
    </>
  );
};

export default Header;
