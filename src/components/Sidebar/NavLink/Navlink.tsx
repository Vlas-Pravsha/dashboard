import React, { ReactNode, useState } from "react";
import Link from "next/link";
import s from "./Navlink.module.scss";

interface NavlinkProps {
  sidebar: SidebarItem[];
  category: number;
  setCategory: (i: number) => void;
}

type SidebarItem = {
  img?: ReactNode;
  id: string;
  pages?: SidebarItem[];
  mainTitle?: string;
  href?: string;
};

const Navlink = ({ sidebar, category, setCategory }: NavlinkProps) => {
  return (
    <>
      {sidebar.map((item: SidebarItem, i: number) => (
        <div key={item.id} className={s.content}>
          {item.pages && item.pages.length ? (
            <>
              {item.pages.map((page: any) => (
                <div
                  className={s.pageItem}
                  key={page.id}
                  onClick={() => setCategory(i)}
                >
                  {page.title}
                </div>
              ))}
            </>
          ) : (
            <Link href={`/${item.href}`}>
              <div
                className={`${category === i ? s.active : ""}`}
                onClick={() => setCategory(i)}
              >
                <div className={s.item}>
                  <span>{item.img}</span>
                  {item.mainTitle && <p className={s.text}>{item.mainTitle}</p>}
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default Navlink;