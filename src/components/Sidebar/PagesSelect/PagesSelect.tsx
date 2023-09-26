import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import s from "./PagesSelect.module.scss";

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
            <Image
              src="/Img/PagesImg/pages.svg"
              alt="Pages"
              height="26"
              width="26"
              className={s.img}
            />
            <h2 className={s.title}>{item.title}</h2>
          </div>
          <div className={s.pagesWrapper}>
            {isOpen &&
              item.pages.map((page) => (
                <Link href={page.href} key={page.id} className={s.pageItem}>
                  {page.title}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PagesSelect;
