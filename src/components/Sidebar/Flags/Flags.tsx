"use client";
import Image from "next/image";
import React from "react";
import { v1 } from "uuid";
import s from "./Flags.module.scss";

const flagsArr = [
  {
    id: v1(),
    img: (
      <Image
        height="25"
        width="25"
        src="/Img/SideBarImg/Flags/ua.svg"
        className={s.img}
        alt="Logo"
      />
    ),
    title: "Ukraine",
  },
  {
    id: v1(),
    img: (
      <Image
        height="25"
        width="25"
        src="/Img/SideBarImg/Flags/ai.svg"
        className={s.img}
        alt="Logo"
      />
    ),
    title: "Azerbaijan",
  },
  {
    id: v1(),
    img: (
      <Image
        height="25"
        width="25"
        src="/Img/SideBarImg/Flags/cz.svg"
        className={s.img}
        alt="Logo"
      />
    ),
    title: "Czech",
  },
  {
    id: v1(),
    img: (
      <Image
        height="25"
        width="25"
        src="/Img/SideBarImg/Flags/id.svg"
        className={s.img}
        alt="Logo"
      />
    ),
    title: "Indonesia",
  },
  {
    id: v1(),
    img: (
      <Image
        height="25"
        width="25"
        src="/Img/SideBarImg/Flags/au.svg"
        alt="Logo"
        className={s.img}
      />
    ),
    title: "Australia",
  },
];

const Flags = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [changeValue, setChangeValue] = React.useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const handleFlagSelect = (flag) => {
    setChangeValue(flag);
    toggle();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {isOpen &&
          flagsArr.map((item) => (
            <div
              key={item.id}
              onClick={() => handleFlagSelect(item.img)}
              className={s.itemWrapper}
            >
              {item.img}
              <span className={s.text}>{item.title}</span>
            </div>
          ))}
      </div>
      <div className={s.choosedImg}>
        {changeValue ? (
          <Image
            onClick={toggle}
            height="25"
            width="25"
            src={changeValue.props.src}
            alt="Logo"
          />
        ) : (
          <Image
            onClick={toggle}
            height="25"
            width="25"
            src="/Img/SideBarImg/Flags/ua.svg"
            alt="Logo"
          />
        )}
      </div>
    </div>
  );
};

export default Flags;
