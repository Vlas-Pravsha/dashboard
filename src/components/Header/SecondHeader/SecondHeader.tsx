import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import Profile from "../Profile/Profile";
import s from "./SecondHeader.module.scss";

const SecondHeaderData = [
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

const SecondHeader = () => {
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
            {SecondHeaderData.map((item) => (
              <div className={s.pageItem} key={item.id}>
                {item.navText}
              </div>
            ))}
          </div>
        </div>
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

export default SecondHeader;
