"use client";
import Image from "next/image";
import React, { useState } from "react";
import s from "./Accounts.module.scss";
import Button from "../Button/Button";

const usersData = [
  {
    id: 1,
    name: "Bonnie Green",
    country: "New York, USA",
    visited: "Last seen: 1 min ago",
    avatar: "/Img/Settingimg/neil-sims.png",
    status: false,
  },
  {
    id: 2,
    name: "Jese Leos",
    country: "California, USA",
    visited: "Last seen: 2 min ago",
    avatar: "/Img/Settingimg/jese-leos.png",
    status: false,
  },
  {
    id: 3,
    name: "Thomas Lean",
    country: "Texas, USA",
    visited: "Last seen: 30 min ago",
    avatar: "/Img/Settingimg/lana-byrd.png",
    status: false,
  },
  {
    id: 4,
    name: "Lana Byrd",
    country: "Texas, USA",
    visited: "Last seen: 1 hour ago",
    avatar: "/Img/Settingimg/profile.png",
    status: true,
  },
];

const Accounts = () => {
  const [userStatus, setUserStatus] = useState(
    usersData.map((user) => ({ id: user.id, status: user.status }))
  );

  const handleChangeStatus = (userId: number) => {
    setUserStatus((prevStatus) =>
      prevStatus.map((user) =>
        user.id === userId ? { ...user, status: !user.status } : user
      )
    );
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Other accounts</h2>
      <div className={s.content}>
        {usersData.map((user, index) => {
          return (
            <div key={user.id} className={s.cart}>
              <div className={s.avatarWrapper}>
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className={s.avatar}
                  height="50"
                  width="50"
                />
                <div className={s.textWrapper}>
                  <div className={s.name}>{user.name}</div>
                  <span className={s.country}>{user.country}</span>
                  <span className={s.visited}>{user.visited}</span>
                </div>
              </div>
              {userStatus[index].status ? (
                <Button
                  type="third"
                  onClick={() => handleChangeStatus(user.id)}
                >
                  Connect
                </Button>
              ) : (
                <Button
                  type="secondary"
                  onClick={() => handleChangeStatus(user.id)}
                >
                  Disconnect
                </Button>
              )}
            </div>
          );
        })}
      </div>
      <Button>Save all</Button>
    </div>
  );
};

export default Accounts;
