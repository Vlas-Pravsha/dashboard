"use client";
import Image from "next/image";
import React, { useState } from "react";
import { v1 } from "uuid";
import s from "./Flags.module.scss";

const flagsArr = [
  {
    id: v1(),
    src: "/Img/SideBarImg/Flags/ua.svg",
    title: "Ukraine",
  },
  {
    id: v1(),
    src: "/Img/SideBarImg/Flags/ai.svg",
    title: "Azerbaijan",
  },
  {
    id: v1(),
    src: "/Img/SideBarImg/Flags/cz.svg",
    title: "Czech",
  },
  {
    id: v1(),
    src: "/Img/SideBarImg/Flags/id.svg",
    title: "Indonesia",
  },
  {
    id: v1(),
    src: "/Img/SideBarImg/Flags/au.svg",
    title: "Australia",
  },
];

const Flags = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeValue, setChangeValue] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const handleFlagSelect = (src: string) => {
    setChangeValue(src);
    toggle();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {isOpen &&
          flagsArr.map((item) => (
            <div
              key={item.id}
              onClick={() => handleFlagSelect(item.src)}
              className={s.itemWrapper}
            >
              <Image
                height={25}
                width={25}
                src={item.src}
                alt={item.title}
                className={s.img}
              />
              <span className={s.text}>{item.title}</span>
            </div>
          ))}
      </div>
      <div className={s.choosedImg}>
        {changeValue ? (
          <Image
            onClick={toggle}
            height={25}
            width={25}
            src={changeValue}
            alt="Logo"
          />
        ) : (
          <Image
            onClick={toggle}
            height={25}
            width={25}
            src="/Img/SideBarImg/Flags/ua.svg"
            alt="Logo"
          />
        )}
      </div>
    </div>
  );
};

export default Flags;
