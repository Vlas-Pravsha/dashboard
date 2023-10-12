import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import s from "./PagesSelect.module.scss";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";

const pagesArr = [
  {
    id: v1(),
    title: "Pages",
    pages: [
      { id: v1(), title: "Pricing", href: "/pages/pricing" },
      { id: v1(), title: "Maintenance", href: "/pages/maintenance" },
      { id: v1(), title: "404 not found", href: "/pages/404" },
      { id: v1(), title: "500 server error", href: "/pages/500" },
    ],
  },
];

interface PagesSelectProps {
  isOpen: boolean;
  pagesToggle: () => void;
}

const PagesSelect = ({ isOpen, pagesToggle }: PagesSelectProps) => {
  return (
    <>
      {pagesArr.map((item) => (
        <div key={item.id} onClick={pagesToggle}>
          <div className={s.titleWrapper}>
            <LuFileSpreadsheet className={s.img} />
            <div className={s.linkWrapper}>
              <h2 className={s.mainTitle}>{item.title}</h2>
              <BiChevronDown className={s.chevronDown} />
            </div>
          </div>
          <div className={s.pagesWrapper}>
            {isOpen &&
              item.pages.map((page) => (
                <Link href={page.href} key={page.id} className={s.pageItem}>
                  <span className={s.title}>{page.title}</span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PagesSelect;
