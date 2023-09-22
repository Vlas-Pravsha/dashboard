"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";
import Button from "../Button/Button";
import s from "./UserList.module.scss";
import Input from "../Input/Input";
import CheckBox from "../CheckBox/CheckBox";
import ModalDelete from "../ModalDelete/ModalDelete";

type UserItem = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  biography: string;
  country: string;
  position: string;
  status: string;
};

interface UserListProps {
  usersData: UserItem[];
}

const UserList = ({ usersData }: UserListProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  function toogleHandleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.mainTitle}>All users</h2>
      <Input placeholder="Search for users" />
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
      <div className={s.paginationWrapper}>
        <div className={s.paginationTextWrapper}>
          <Image
            src={"/Img/UsersImg/chevron-left-solid.svg"}
            alt="Left"
            className={s.back}
            width="30"
            height="30"
          />
          <Image
            src={"/Img/UsersImg/chevron-right-solid.svg"}
            alt="Right"
            className={s.to}
            width="30"
            height="30"
          />
          <div className={s.text}>
            Showing <span className={s.span}>1-20 </span>of
            <span className={s.span}> 2290</span>
          </div>
        </div>
        <div className={s.buttonWrapper}>
          <Button type="previous">Previous</Button>
          <Button type="next">Next</Button>
        </div>
      </div>
      {isVisible && <ModalDelete onClose={toogleHandleClick}></ModalDelete>}
    </div>
  );
};

export default UserList;
