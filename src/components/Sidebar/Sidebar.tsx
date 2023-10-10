"use client";
import React from "react";
import { v1 } from "uuid";
import Link from "next/link";
import s from "./Sidebar.module.scss";
import CrudSelect from "./SelectCrud/CrudSelect";
import PagesSelect from "./SelectPages/PagesSelect";
import { MdDashboardCustomize } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import NavFooter from "./NavFooter/NavFooter";
import Navlink from "./NavLink/Navlink";

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
    <div className={`${navOpen ? s.backgroundClose : s.background}`}>
      <div className={`${navOpen ? "" : s.overlay}`}></div>
      <div className={s.wrapper}>
        <div className={s.gap}>
          <Navlink
            sidebar={sidebar}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className={s.titleWrapper}>
          <BsGithub className={s.iconGit} />
          <span className={s.text}>GitHub Repository</span>
        </div>
        <NavFooter />
      </div>
    </div>
  );
};

export default Sidebar;
