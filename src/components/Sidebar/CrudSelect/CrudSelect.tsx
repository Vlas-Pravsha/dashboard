import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import s from "./CrudSelect.module.scss";

const crudArr = [
  { id: v1(), title: "Products", href: "crud/products" },
  { id: v1(), title: "Users", href: "crud/users" },
];

const CrudSelect = () => {
  return (
    <div>
      <div className={s.content}>
        {crudArr.map((item) => (
          <Link href={item.href} key={item.id} className={s.item}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrudSelect;
