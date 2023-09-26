import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import s from "./CrudSelect.module.scss";

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
    <div className={s.wrapper}>
      <div className={s.content}>
        {crudArr.map((item) => (
          <div key={item.id} onClick={crudToggle}>
            <div className={s.titleWrapper}>
              <Image
                src="/Img/SideBarImg/news.svg"
                alt="Crud"
                height="26"
                width="26"
                className={s.img}
              />
              <h2 className={s.title}>{item.title}</h2>
            </div>
            <div className={s.pagesWrapper}>
              {crudOpen &&
                item.pages.map((page) => (
                  <Link href={page.href} key={page.id} className={s.pageItem}>
                    {page.title}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudSelect;
