import Link from "next/link";
import React from "react";
import { v1 } from "uuid";
import s from "./PagesSelect.module.scss";

const pagesArr = [
  { id: v1(), title: "Pricing", href: "pages/pricing" },
  { id: v1(), title: "Maintenance", href: "pages/maintenance" },
  { id: v1(), title: "404 not found", href: "pages/404" },
  { id: v1(), title: "500 server error", href: "pages/500" },
];

const PagesSelect = () => {
  return (
    <div>
      <div className={s.content}>
        {pagesArr.map((item) => (
          <Link href={item.href} key={item.id} className={s.item}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PagesSelect;
