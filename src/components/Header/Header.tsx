"use client";
import Image from "next/image";
import s from "./Header.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import Profile from "./Profile/Profile";
import { changeTheme } from "@/utils";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  const [changeThemeImg, setChangeThemeImg] = useState(false);
  const toggle = () => setChangeThemeImg(!changeThemeImg);
  const changeThemeAndIcon = () => {
    toggle();
    changeTheme();
  };

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
            <AiOutlineSearch className={s.glass} />
            <input type="text" className={s.input} placeholder="Search" />
          </div>
        </div>
        <div className={s.search}></div>
        <div className={s.svgWrap}>
          <button onClick={changeThemeAndIcon}>
            {changeThemeImg ? (
              <div className={s.imgWrap}>
                <BsMoonFill className={s.svg} />
              </div>
            ) : (
              <div className={s.imgWrap}>
                <FaSun className={s.svg} />
              </div>
            )}
          </button>

          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
