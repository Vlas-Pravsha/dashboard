import React from "react";
import s from "./Users.module.scss";
import UsersBar from "./UsersBar/UsersBar";

const Users = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.textWrapper}>
          <span className={s.text}>Users</span>
          <h2 className={s.title}>2,340</h2>
          <div className={s.text}>
            <span className={s.percent}>3,4% </span>
            Since last month
          </div>
        </div>
        <UsersBar />
      </div>
    </div>
  );
};

export default Users;
