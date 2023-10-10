import Link from "next/link";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import Flags from "../Flags/Flags";
import s from "./NavFooter.module.scss";

const NavFooter = () => {
  return (
    <div className={s.footer}>
      <div className={s.svgWrap}>
        <AiOutlineBars className={s.footerImg} />
        <Link href="/setting">
          <IoMdSettings className={s.footerImg} />
        </Link>
        <Flags />
      </div>
    </div>
  );
};

export default NavFooter;
