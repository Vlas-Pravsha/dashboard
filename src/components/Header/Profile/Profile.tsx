"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { v1 } from "uuid";
import s from "./Profile.module.scss";

const profileArr = [
  {
    id: v1(),
    title: "Neil Sims",
    email: "neil.sims@flowbite.com",
    options: [
      { id: v1(), text: "DashBoard", href: "/" },
      { id: v1(), text: "Settings", href: "/setting" },
      { id: v1(), text: "Earnings", href: "" },
      { id: v1(), text: "Sign out", href: "" },
    ],
  },
];

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={s.wrapper}>
      <Image
        src={"/Img/HeaderImg/Pr.jpg"}
        alt="Profile"
        className={s.profile}
        width="30"
        height="30"
        onClick={toggle}
      />
      <div className={s.content}>
        {isOpen &&
          profileArr.map((item) => (
            <div key={item.id} className={s.itemWrap}>
              <h2 className={s.title}>{item.title}</h2>
              <span className={s.email}>{item.email}</span>
              <span className={s.line}></span>
              <div className={s.optionsWrapper}>
                {item.options.map((option) => (
                  <Link href={option.href} key={option.id}>
                    <div className={s.optionText} onClick={toggle}>
                      {option.text}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
