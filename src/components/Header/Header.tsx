import Image from "next/image";
import s from "./Header.module.scss";
import React from "react";

import Link from "next/link";
import Profile from "./Profile/Profile";

const Header = () => {
  return (
    <div className={s.background}>
      <div className={s.headerWrapper}>
        <div className={s.gap}>
          <Link href="/">
            <div className={s.headerTitleWrap}>
              <Image
                src={"/Img/HeaderImg/Icon.svg"}
                alt="Icon"
                className={s.icon}
                width="30"
                height="30"
              />
              <h2 className={s.title}>DashBoard</h2>
            </div>
          </Link>
          <div className={s.searchGlass}>
            <Image
              src={"/Img/HeaderImg/glass.svg"}
              alt="Glass"
              className={s.glass}
              width="30"
              height="30"
            />
            <input type="text" className={s.input} placeholder="Search" />
          </div>
        </div>
        <div className={s.search}></div>
        <div className={s.svgWrap}>
          <Image
            src={"/Img/HeaderImg/moon-solid.svg"}
            alt="Moon"
            className={s.svg}
            width="30"
            height="30"
          />
          <Image
            src={"/Img/HeaderImg/sun-solid.svg"}
            alt="Sun"
            className={s.svg}
            width="30"
            height="30"
          />
      
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
