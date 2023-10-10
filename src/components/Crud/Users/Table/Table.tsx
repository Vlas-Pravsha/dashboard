import React from "react";
import s from "./Table.module.scss";
import Image from "next/image";
import CheckBox from "../CheckBox/CheckBox";
import Button from "./../Button/Button";
import { UserItem } from "../UserList/UserList";

interface TableProps {
  usersData: UserItem[];
  toogleHandleClick: () => void;
}

const Table = ({ usersData, toogleHandleClick }: TableProps) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.th}>
            <CheckBox></CheckBox>
          </th>
          <th className={s.th}>NAME</th>
          <th className={s.th}>BIOGRAPHY</th>
          <th className={s.th}>POSITION</th>
          <th className={s.th}>COUNTRY</th>
          <th className={s.th}>STATUS</th>
          <th className={s.th}>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((user) => {
          const biography = user.biography.slice(0, 64);
          return (
            <tr key={user.id} className={s.tr}>
              <td className={s.td}>
                <CheckBox></CheckBox>
              </td>
              <td className={s.td}>
                <div className={s.imgTextWrapper}>
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    className={s.avatar}
                    width="40"
                    height="40"
                  />
                  <div className={s.textWrapper}>
                    <div className={s.name}>{user.name}</div>
                    <span className={s.email}> {user.email}</span>
                  </div>
                </div>
              </td>
              <td className={s.td}>
                <span className={s.biography}>{`${biography}...`}</span>
              </td>
              <td className={s.td}>
                <span className={s.position}>{user.position}</span>
              </td>
              <td className={s.td}>
                <span className={s.country}>{user.country}</span>
              </td>
              <td className={s.td}>
                {user.status === "Offline" ? (
                  <>
                    <span className={s.redDote}></span>
                    <span className={s.country}>{user.status}</span>
                  </>
                ) : (
                  <>
                    <span className={s.dote}></span>
                    <span className={s.country}>{user.status}</span>
                  </>
                )}
              </td>
              <td>
                <div className={s.buttonWrapper}>
                  <Button type="default">Edit user</Button>
                  <Button type="secondary" onClick={toogleHandleClick}>
                    Delete user
                  </Button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
