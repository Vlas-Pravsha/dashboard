import React, { ReactNode } from "react";
import Link from "next/link";
import s from "./Navlink.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { setCategory } from "@/store/slices/Sidebar/SidebarSlice";

interface NavlinkProps {
  sidebar: SidebarItem[];
}

type SidebarItem = {
  img?: ReactNode;
  id: string;
  pages?: Page[];
  mainTitle?: string;
  href?: string;
};

type Page = {
  id: string;
  title: ReactNode;
};

const Navlink = ({ sidebar }: NavlinkProps) => {
  const category = useSelector((state: RootState) => state.sidebar.category);
  const dispatch = useDispatch();

  return (
    <>
      {sidebar.map((item: SidebarItem, i: number) => (
        <div key={item.id} className={s.content}>
          {item.pages && item.pages.length ? (
            <>
              {item.pages.map((page) => (
                <div
                  className={s.pageItem}
                  key={page.id}
                  onClick={() => dispatch(setCategory(i))}
                >
                  {page.title}
                </div>
              ))}
            </>
          ) : (
            <Link href={`/${item.href}`}>
              <div
                className={`${category === i ? s.active : ""}`}
                onClick={() => dispatch(setCategory(i))}
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
