"use client";
import React from "react";
import Dashboard from "../../assets/Img/SideBarImg/dashboard.svg";
import Node from "../../assets/Img/SideBarImg/transactions.svg";
import Stats from "../../assets/Img/SideBarImg/performance.svg";
import Converter from "../../assets/Img/SideBarImg/news.svg";
import Setting from "../../assets/Img/SideBarImg/settings.svg";
import Users from "../../assets/Img/SideBarImg/support.svg";
import Burs from "../../assets/Img/SideBarImg/bars-solid.svg";
import Exit from "../../assets/Img/SideBarImg/xmark-solid.svg";
import Gear from "../../assets/Img/SideBarImg/sideGear.svg";
import { v1 } from "uuid";
import Link from "../../../node_modules/next/link";
import s from "./Sidebar.module.scss";
import Image from "../../../node_modules/next/image";

const sidebar = [
  { img: Dashboard, id: v1(), title: "Dashboard", link: "" },
  { img: Node, id: v1(), title: "Node ", link: "node " },
  { img: Stats, id: v1(), title: "Collections", link: "collections" },
  { img: Converter, id: v1(), title: "Converter", link: "converter" },
  { img: Users, id: v1(), title: "Users", link: "users" },
  { img: Node, id: v1(), title: "Products", link: "products" },
  { img: Setting, id: v1(), title: "Setting", link: "setting" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [category, setCategory] = React.useState(0);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`${isOpen ? s.wrapperActive : s.wrapper}`}>
      <div className={s.gap}>
        {/* <div className={s.line}>
          <Image
            src={Burs}
            alt={Burs}
            className={s.bursIcon}
            onClick={toggle}
          />
        </div> */}
        {sidebar.map((item, i) => (
          <div key={item.id} className={s.content}>
            <Link href={`/${item.link}`}>
              <div
                className={`${category === i ? s.active : ""}`}
                onClick={() => setCategory(i)}
              >
                <div className={s.item}>
                  <Image src={item.img} alt={item.title} className={s.icon} />
                  <p className={s.text}>{item.title}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
{
}
