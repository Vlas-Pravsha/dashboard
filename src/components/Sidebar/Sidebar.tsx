"use client";
import React from "react";
import { v1 } from "uuid";
import Link from "../../../node_modules/next/link";
import s from "./Sidebar.module.scss";
import Image from "../../../node_modules/next/image";
import Flags from "./Flags/Flags";
import CrudSelect from "./CrudSelect/CrudSelect";
import PagesSelect from "./PagesSelect/PagesSelect";

const sp = "/Img/SideBarImg/";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [crudOpen, setCrudOpen] = React.useState(false);
  const [category, setCategory] = React.useState(0);

  const pagesToggle = () => setIsOpen(!isOpen);
  const crudToggle = () => setCrudOpen(!crudOpen);

  const sidebar = [
    {
      mainTitle: "Dashboard",
      img: sp + "dashboard.svg",
      id: v1(),
      href: "",
    },

    {
      id: v1(),
      pages: [
        {
          id: v1(),
          title: <PagesSelect isOpen={isOpen} pagesToggle={pagesToggle} />,
        },
      ],
    },

    {
      mainTitle: "Node ",
      img: sp + "transactions.svg",
      id: v1(),
      href: "node ",
    },
    {
      mainTitle: "Collections",
      img: sp + "performance.svg",
      id: v1(),
      href: "collections",
    },

    {
      id: v1(),
      pages: [
        {
          id: v1(),
          title: <CrudSelect crudToggle={crudToggle} crudOpen={crudOpen} />,
        },
      ],
    },

    {
      img: sp + "settings.svg",
      id: v1(),
      mainTitle: "Setting",
      href: "setting",
    },
  ];

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
                    <div className={s.item}>
                      {item.img && (
                        <Image
                          src={item.img}
                          alt={item.mainTitle}
                          className={s.icon}
                          width="30"
                          height="30"
                        />
                      )}
                      {item.mainTitle && (
                        <p className={s.text}>{item.mainTitle}</p>
                      )}
                    </div>
                  </div>
                  {item.pages.map((page) => (
                    <div key={page.id} className={s.pageWrapper}>
                      <div className={s.pageItem}>{page.title}</div>
                    </div>
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
                        {item.img && (
                          <Image
                            src={item.img}
                            alt={item.mainTitle}
                            className={s.icon}
                            width="30"
                            height="30"
                          />
                        )}
                        {item.mainTitle && (
                          <p className={s.text}>{item.mainTitle}</p>
                        )}
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
