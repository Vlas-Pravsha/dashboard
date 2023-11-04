import React from "react";
import s from "./Table.module.scss";
import { MdOutlineDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface TableProps {
  tableData: TableItem[];
}

type TableItem = {
  id: string;
  title: string;
  Freelancer: string;
  Company: string;
  Enterprise: string;
};

const Table = ({ tableData }: TableProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
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
    </div>
  );
};

export default Table;
