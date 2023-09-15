import Image from "next/image";
import React from "react";
import s from "./Accounts.module.scss";
import Avatar1 from "../../../assets/Img/Settingimg/neil-sims.png";
import Avatar2 from "../../../assets/Img/Settingimg/jese-leos.png";
import Avatar3 from "../../../assets/Img/Settingimg/lana-byrd.png";
import Avatar4 from "../../../assets/Img/Settingimg/profile.png";
import Button from "../Button/Button";

const usersData = [
  {
    id: 1,
    name: "Bonnie Green",
    country: "New York, USA",
    visited: "Last seen: 1 min ago",
    avatar: Avatar1,
    status: false,
  },
  {
    id: 2,
    name: "Jese Leos",
    country: "California, USA",
    visited: "Last seen: 2 min ago",
    avatar: Avatar2,
    status: false,
  },
  {
    id: 3,
    name: "Thomas Lean",
    country: "Texas, USA",
    visited: "Last seen: 30 min ago",
    avatar: Avatar3,
    status: false,
  },
  {
    id: 4,
    name: "Lana Byrd",
    country: "Texas, USA",
    visited: "Last seen: 1 hour ago",
    avatar: Avatar4,
    status: true,
  },
];

const Accounts = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Other accounts</h2>
      <div className={s.content}>
        {usersData.map((user) => {
          return (
            <div key={user.id} className={s.cart}>
              <div className={s.avatarWrapper}>
                <Image src={user.avatar} alt={user.name} className={s.avatar} />
                <div className={s.textWrapper}>
                  <div className={s.name}>{user.name}</div>
                  <span className={s.country}>{user.country}</span>
                  <span className={s.visited}>{user.visited}</span>
                </div>
              </div>
              {user.status ? (
                <Button type="third">Connect</Button>
              ) : (
                <Button type="secondary">Disconnect</Button>
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
