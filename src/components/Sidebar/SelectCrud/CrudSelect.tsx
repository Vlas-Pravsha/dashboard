import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import s from "./CrudSelect.module.scss";
import { AiOutlineIdcard } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const crudArr = [
  {
    id: v1(),
    title: "CRUD",
    pages: [
      { id: v1(), title: "Products", href: "/crud/products" },
      { id: v1(), title: "Users", href: "/crud/users" },
    ],
  },
];

interface CrudSelectProps {
  crudToggle: () => void;
  crudOpen: boolean;
}

const CrudSelect = ({ crudToggle, crudOpen }: CrudSelectProps) => {
  return (
    <>
      {crudArr.map((item) => (
        <div key={item.id} onClick={crudToggle}>
          <div className={s.titleWrapper}>
            <AiOutlineIdcard className={s.img} />
            <div className={s.linkWrapper}>
              <h2 className={s.mainTitle}>{item.title}</h2>
              <BiChevronDown className={s.chevronDown} />
            </div>
          </div>
          <div className={s.pagesWrapper}>
            {crudOpen &&
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

export default CrudSelect;
