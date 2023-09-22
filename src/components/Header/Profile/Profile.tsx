"use client";
import Image from "next/image";
import React, { useState } from "react";
import { v1 } from "uuid";
import s from "./Profile.module.scss";

const profileArr = [
  {
    id: v1(),
    title: "Neil Sims",
    email: "neil.sims@flowbite.com",
    options: [
      { id: v1(), text: "DashBoard" },
      { id: v1(), text: "Settings" },
      { id: v1(), text: "Earnings" },
      { id: v1(), text: "Sign out" },
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
                  <div
                    key={option.id}
                    className={s.optionText}
                    onClick={toggle}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
