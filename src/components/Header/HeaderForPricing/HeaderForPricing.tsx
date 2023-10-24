"use client";
import { setChangeThemeImg } from "@/store/slices/Header/HeaderSlice";
import { RootState } from "@/store/store";
import { changeTheme } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v1 } from "uuid";
import Profile from "../Profile/Profile";
import s from "./HeaderForPricing.module.scss";

const HeaderForPricingData = [
  {
    id: v1(),
    navText: "Home",
  },
  {
    id: v1(),
    navText: "Team",
  },
  {
    id: v1(),
    navText: "Pricing",
  },
  {
    id: v1(),
    navText: "Contact",
  },
];

const HeaderForPricing = () => {
  const dispatch = useDispatch();
  const changeThemeImg = useSelector(
    (state: RootState) => state.header.changeThemeImg
  );

  const toggle = () => dispatch(setChangeThemeImg(!changeThemeImg));
  const changeThemeAndIcon = () => {
    toggle();
    changeTheme();
  };
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.headerWrap}>
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
          <div className={s.navWrapper}>
            {HeaderForPricingData.map((item) => (
              <div className={s.pageItem} key={item.id}>
                {item.navText}
              </div>
            ))}
          </div>
        </div>
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

export default HeaderForPricing;
