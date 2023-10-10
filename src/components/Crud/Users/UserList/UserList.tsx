"use client";
import React from "react";
import s from "./UserList.module.scss";
import Input from "../Input/Input";
import ModalDelete from "../ModalDelete/ModalDelete";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";

export type UserItem = {
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
      <Table usersData={usersData} toogleHandleClick={toogleHandleClick} />
      <Pagination />
      {isVisible && <ModalDelete onClose={toogleHandleClick}></ModalDelete>}
    </div>
  );
};

export default UserList;
