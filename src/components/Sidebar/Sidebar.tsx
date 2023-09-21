"use client";
import React from "react";
import { v1 } from "uuid";
import Link from "../../../node_modules/next/link";
import s from "./Sidebar.module.scss";
import Image from "../../../node_modules/next/image";
import Flags from "./Flags/Flags";

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
    img: "/Img/PagesImg/pages.svg",
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
  const [isOpen, setIsOpen] = React.useState(true);
  const [category, setCategory] = React.useState(0);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={s.background}>
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
                    <div className={s.item} onClick={toggle}>
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
                  {isOpen &&
                    item.pages.map((page) => (
                      <Link
                        href={`/${page.href}`}
                        key={page.id}
                        className={s.pageWrapper}
                      >
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

        <div className={s.footer}>
          <div className={s.svgWrap}>
            <Image
              height="26"
              width="26"
              src="/Img/SideBarImg/params.svg"
              alt="Logo"
            />
            <Link href="/setting">
              <Image
                height="26"
                width="26"
                src="/Img/SideBarImg/setting-bottom.svg"
                alt="Logo"
              />
            </Link>
            <Flags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
