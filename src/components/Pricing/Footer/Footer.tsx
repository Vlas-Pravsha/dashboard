import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import s from "./Footer.module.scss";

const footerData = [
  {
    id: v1(),
    title: "RESOURCES",
    opitons: [
      { id: v1(), title: "Flowbite" },
      { id: v1(), title: "Figma" },
      { id: v1(), title: "Tailwind CSS" },
      { id: v1(), title: "Blog" },
      { id: v1(), title: "Blocks" },
    ],
  },
  {
    id: v1(),
    title: "HELP AND SUPPORT",
    opitons: [
      { id: v1(), title: "GitHub Repository" },
      { id: v1(), title: "Flowbite Library" },
    ],
  },
  {
    id: v1(),
    title: "FOLLOW US",
    opitons: [
      { id: v1(), title: "Github" },
      { id: v1(), title: "Twitter" },
      { id: v1(), title: "Facebook" },
      { id: v1(), title: "LinkedIn" },
    ],
  },
  {
    id: v1(),
    title: "LEGAL",
    opitons: [
      { id: v1(), title: "Privacy Policy" },
      { id: v1(), title: "Terms & Conditions" },
      { id: v1(), title: "EULA" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.content}>
        <div className={s.footerWrap}>
          <Link href="/" className={s.dashWrapper}>
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
            <p className={s.text}>
              Flowbite is a UI library of elements & components based on
              Tailwind CSS that can get you started building websites faster and
              more efficiently.
            </p>
          </Link>
          <div className={s.test}>
            {footerData.map((item) => (
              <div className={s.item} key={item.id}>
                <h3 className={s.itemTitle}>{item.title}</h3>
                <ul className={s.list}>
                  {item.opitons.map((item) => (
                    <li key={item.id} className={s.text}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.footerText}>© 2023 DashBoard. My Best Project.</div>
    </footer>
  );
};

export default Footer;
