import Image from "next/image";
import React from "react";
import { v1 } from "uuid";
import s from "./Table.module.scss";
import { MdOutlineDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
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
                    <MdOutlineDone className={s.icon} />
                  ) : item.Freelancer === "disabled" ? (
                    <IoClose className={s.close} />
                  ) : (
                    <div className={s.usersText}>{item.Freelancer}</div>
                  )}
                </td>
                <td>
                  {item.Company === "active" ? (
                    <MdOutlineDone className={s.icon} />
                  ) : item.Company === "disabled" ? (
                    <IoClose className={s.close} />
                  ) : (
                    <div className={s.usersText}>{item.Company}</div>
                  )}
                </td>
                <td className={s.borderRadiousRight}>
                  {item.Enterprise === "active" ? (
                    <MdOutlineDone className={s.icon} />
                  ) : item.Enterprise === "disabled" ? (
                    <IoClose className={s.close} />
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
