import Image from "next/image";
import s from "./Header.module.scss";
import React from "react";
import Icon from "../../assets/Img/HeaderImg/Icon.svg";
import Moon from "../../assets/Img/HeaderImg/moon-solid.svg";
import Sun from "../../assets/Img/HeaderImg/sun-solid.svg";
import Glass from "../../assets/Img/HeaderImg/glass.svg";
import Profile from "../../assets/Img/HeaderImg/Pr.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <div className={s.gap}>
        <Link href="/">
          <div className={s.headerTitleWrap}>
            <Image src={Icon} alt="Icon" className={s.icon} />
            <h2 className={s.title}>DashBoard</h2>
          </div>
        </Link>
        <div className={s.searchGlass}>
          <Image src={Glass} alt="Glass" className={s.glass} />
          <input type="text" className={s.input} placeholder="Search" />
        </div>
      </div>
      <div className={s.search}></div>
      <div className={s.svgWrap}>
        <Image src={Moon} alt="Moon" className={s.svg} />
        <Image src={Sun} alt="Sun" className={s.svg} />
        <Image src={Profile} alt="Profile" className={s.profile} />
      </div>
    </div>
  );
};

export default Header;
