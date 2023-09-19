"use client";
import React from "react";
import Dashboard from "/Img/SideBarImg/dashboard.svg";
import Node from "/Img/SideBarImg/transactions.svg";
import Stats from "/Img/SideBarImg/performance.svg";
import Converter from "/Img/SideBarImg/news.svg";
import Setting from "/Img/SideBarImg/settings.svg";
import Users from "/Img/SideBarImg/support.svg";
import Burs from "/Img/SideBarImg/bars-solid.svg";
import Exit from "/Img/SideBarImg/xmark-solid.svg";
import Gear from "/Img/SideBarImg/sideGear.svg";
import { v1 } from "uuid";
import Link from "../../../node_modules/next/link";
import s from "./Sidebar.module.scss";
import Image from "../../../node_modules/next/image";

const sp = "/Img/SideBarImg/";

const sidebar = [
  {
    title: "Dashboard",
    img: sp + "dashboard.svg",
    id: v1(),
    href: "",
  },

  {
    title: "Pages",
    img: sp + "news.svg",
    id: v1(),
    pages: [
      { id: v1(), title: "Pricing", href: "pages/pricing" },
      { id: v1(), title: "Maintenance", href: "pages/maintenance" },
      { id: v1(), title: "404 not found", href: "pages/404" },
      { id: v1(), title: "500 server error", href: "pages/500" },
    ],
  },

  {
    title: "Node ",
    img: sp + "transactions.svg",
    id: v1(),
    href: "node ",
  },
  {
    title: "Collections",
    img: sp + "performance.svg",
    id: v1(),
    href: "collections",
  },

  {
    title: "CRUD",
    img: sp + "news.svg",
    id: v1(),
    pages: [
      { id: v1(), title: "Products", href: "crud/products" },
      { id: v1(), title: "Users", href: "crud/users" },
    ],
  },

  { img: sp + "settings.svg", id: v1(), title: "Setting", href: "setting" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [category, setCategory] = React.useState(0);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={s.wrapper}>
      <div className={s.gap}>
        {sidebar.map((item, i) => {
          if (item.pages && item.pages.length) {
            return (
              <div key={item.id} className={s.content}>
                <div
                  className={`${category === i ? s.active : ""}`}
                  onClick={() => setCategory(i)}
                >
                  <div className={s.item}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      className={s.icon}
                      width="30"
                      height="30"
                    />
                    <p className={s.text}>{item.title}</p>
                  </div>
                </div>
                {item.pages.map((page) => (
                  <Link href={`/${page.href}`} key={page.id}>
                    <div className={s.pageItem}>{page.title}</div>
                  </Link>
                ))}
              </div>
            );
          } else {
            return (
              <div key={item.id} className={s.content}>
                <Link href={`/${item.href}`}>
                  <div
                    className={`${category === i ? s.active : ""}`}
                    onClick={() => setCategory(i)}
                  >
                    <div className={s.item}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        className={s.icon}
                        width="30"
                        height="30"
                      />
                      <p className={s.text}>{item.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
