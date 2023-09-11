"use client";
import React from "react";
import Icon from "../../assets/Img/Icon.svg";
import Profile from "../../assets/Img/profile.png";
import Dashboard from "../../assets/Img/dashboard.svg";
import Node from "../../assets/Img/transactions.svg";
import Stats from "../../assets/Img/performance.svg";
import Converter from "../../assets/Img/news.svg";
import Support from "../../assets/Img/settings.svg";
import Registration from "../../assets/Img/support.svg";
import Burs from "../../assets/Img/bars-solid.svg";
import Exit from "../../assets/Img/xmark-solid.svg";
import { v1 } from "uuid";
import Link from "../../../node_modules/next/link";
import s from "./Sidebar.module.scss";
import Image from "../../../node_modules/next/image";

const sidebar = [
  { img: Dashboard, id: v1(), title: "Dashboard", link: "" },
  { img: Node, id: v1(), title: "Node ", link: "node " },
  { img: Stats, id: v1(), title: "Collections", link: "collections" },
  { img: Converter, id: v1(), title: "Converter", link: "converter" },
  { img: Registration, id: v1(), title: "Registration", link: "registration" },
  { img: Support, id: v1(), title: "Support", link: "support" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [category, setCategory] = React.useState(0);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`${isOpen ? s.sidebarWrapActive : s.sidebarWrap}`}>
      <div className={s.gap}>
        <div className={`${isOpen ? s.titleIconWrapActive : s.titleIconWrap}`}>
          <Image src={Icon} alt="Icon" className={s.icon} />
          <p className={s.title}>DashBoard</p>
        </div>
        <div className={s.line}>
          {isOpen ? (
            <Image
              src={Burs}
              alt={Burs}
              className={s.bursIcon}
              onClick={toggle}
            />
          ) : (
            <Image
              src={Exit}
              alt={Exit}
              className={s.exitIcon}
              onClick={toggle}
            />
          )}
        </div>
        <div className={`${isOpen ? s.profileWrapActive : s.profileWrap}`}>
          <Image src={Profile} alt="Profile" className={s.profile} />
          <div className={s.textWrap}>
            <h3 className={s.profileTitle}>Hello Everyone</h3>
            <p className={s.profileText}>vlas@gmail.com</p>
          </div>
        </div>
        <div className={s.mainCategoryWrapper}>
          <div
            className={`${
              isOpen ? s.categoryWrapperActive : s.categoryWrapper
            }`}
          >
            {sidebar.map((item, i) => (
              <div
                key={item.id}
                className={`${category === i ? s.active : ""}  `}
                onClick={() => setCategory(i)}
              >
                <Link href={`/${item.link}`}>
                  <div
                    className={`${
                      isOpen ? s.sideBarItemActive : s.sideBarItem
                    }`}
                  >
                    <Image src={item.img} alt={item.title} />
                    <p className={s.itemText}>{item.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
