"use client";
import Image from "next/image";
import s from "./Header.module.scss";
import React from "react";
import Link from "next/link";
import Profile from "./Profile/Profile";
import { changeTheme } from "@/utils";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setChangeThemeImg, setNavOpen } from "@/store/slices/Header/HeaderSlice";

const Header = () => {
  const navOpen = useSelector((state: RootState) => state.header.navOpen);

  const dispatch = useDispatch();
  const changeThemeImg = useSelector(
    (state: RootState) => state.header.changeThemeImg
  );

  const toggle = () => dispatch(setChangeThemeImg(!changeThemeImg));
  const changeThemeAndIcon = () => {
    toggle();
    changeTheme();
  };

  const navToggle = () => dispatch(setNavOpen(!navOpen));

  return (
    <div className={s.background}>
      <div className={`${navOpen ? "" : s.overlay}`}></div>
      <div className={s.headerWrapper}>
        <div className={s.gap}>
          {navOpen ? (
            <>
              <div onClick={navToggle} className={s.svgBackground}>
                <HiMenuAlt1 className={s.svgOpen} />
              </div>
            </>
          ) : (
            <>
              <div onClick={navToggle} className={s.svgBackground}>
                <MdOutlineClose className={s.svgClose} />
              </div>
            </>
          )}
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
