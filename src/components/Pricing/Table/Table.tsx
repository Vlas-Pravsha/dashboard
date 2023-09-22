import Image from "next/image";
import React from "react";
import { v1 } from "uuid";
import s from "./Table.module.scss";
const tableData = [
  {
    id: v1(),
    title: "Seperate business/personal",
    Freelancer: "active",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Estimate tax payments",
    Freelancer: "active",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Stock control",
    Freelancer: "active",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Create invoices & estimates",
    Freelancer: "disabled",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Manage bills & payments",
    Freelancer: "disabled",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Run payroll",
    Freelancer: "disabled",
    Company: "active",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Handle multiple currencies",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Number of Users",
    Freelancer: "1 User",
    Company: "5-10 Users",
    Enterprise: "20+ Users",
  },
  {
    id: v1(),
    title: "Track deductible mileage",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Track employee time",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
  {
    id: v1(),
    title: "Multi-device",
    Freelancer: "disabled",
    Company: "disabled",
    Enterprise: "active",
  },
];

const Table = () => {
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.th}></th>
            <th className={s.th}>Freelancer</th>
            <th className={s.th}>Company</th>
            <th className={s.th}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr key={item.id} className={s.tr}>
                <td className={s.td}>
                  <h2 className={s.title}>{item.title}</h2>
                </td>
                <td>
                  {item.Freelancer === "active" ? (
                    <Image
                      src="/Img/PagesImg/chevron-green.svg"
                      alt="Img"
                      width={20}
                      height={20}
                      className={s.img}
                    />
                  ) : item.Freelancer === "disabled" ? (
                    <Image
                      src="/Img/PagesImg/chevron-red.svg"
                      alt="Img"
                      width={20}
                      height={20}
                      className={s.img}
                    />
                  ) : (
                    <div className={s.usersText}>{item.Freelancer}</div>
                  )}
                </td>
                <td>
                  {item.Company === "active" ? (
                    <Image
                      src="/Img/PagesImg/chevron-green.svg"
                      alt="Img"
                      width={20}
                      height={20}
                      className={s.img}
                    />
                  ) : item.Company === "disabled" ? (
                    <Image
                      src="/Img/PagesImg/chevron-red.svg"
                      alt="Img"
                      width={20}
                      height={20}
                      className={s.img}
                    />
                  ) : (
                    <div className={s.usersText}>{item.Company}</div>
                  )}
                </td>
                <td className={s.borderRadiousRight}>
                  {item.Enterprise === "active" ? (
                    <Image
                      src="/Img/PagesImg/chevron-green.svg"
                      alt="Img"
                      width={20}
                      height={20}
                      className={s.img}
                    />
                  ) : item.Enterprise === "disabled" ? (
                    <Image
                      src="/Img/PagesImg/chevron-red.svg"
                      alt="Img"
                      width={20}
                      height={20}
                      className={s.img}
                    />
                  ) : (
                    <div className={s.usersText}>{item.Enterprise}</div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
