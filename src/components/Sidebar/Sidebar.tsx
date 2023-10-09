"use client";
import React from "react";
import { v1 } from "uuid";
import Link from "next/link";
import s from "./Sidebar.module.scss";
import Image from "next/image";
import Flags from "./Flags/Flags";
import CrudSelect from "./CrudSelect/CrudSelect";
import PagesSelect from "./PagesSelect/PagesSelect";
import { MdDashboardCustomize } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

interface SidebarProps {
  navOpen?: boolean;
}
const Sidebar = ({ navOpen }: SidebarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [crudOpen, setCrudOpen] = React.useState(false);
  const [category, setCategory] = React.useState(0);

  const pagesToggle = () => setIsOpen(!isOpen);
  const crudToggle = () => setCrudOpen(!crudOpen);

  const sidebar = [
    {
      mainTitle: "Dashboard",
      img: <MdDashboardCustomize className={s.icon} />,
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
      img: <BiNotepad className={s.icon} />,
      id: v1(),
      href: "node ",
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
      img: <IoMdSettings className={s.icon} />,
      id: v1(),
      mainTitle: "Setting",
      href: "setting",
    },
  ];

  return (
    <>
      <div className={`${navOpen ? s.backgroundClose : s.background}`}>
        <div className={s.wrapper}>
          <div className={s.gap}>
            {sidebar.map((item, i) => {
              if (item.pages && item.pages.length) {
                return (
                  <div key={item.id} className={s.content}>
                    <div
                      className={`${category === i ? s.active : ""}`}
                      onClick={() => setCategory(i)}
                    ></div>
                    {item.pages.map((page) => (
                      <div className={s.pageItem} key={page.id}>
                        {page.title}
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
                          <span>{item.img}</span>

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
          <div className={s.titleWrapper}>
            <BsGithub className={s.iconGit} />
            <span className={s.text}>GitHub Repository</span>
          </div>
          <div className={s.footer}>
            <div className={s.svgWrap}>
              <AiOutlineBars className={s.footerImg} />
              <Link href="/setting">
                <IoMdSettings className={s.footerImg} />
              </Link>
              <Flags />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
