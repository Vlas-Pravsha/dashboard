"use client";
import React from "react";
import Button from "../Button/Button";
import AlertList from "./AlertList/AlertList";
import EmailList from "./EmailList/EmailList";
import s from "./Notifications.module.scss";

const Notifications = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.cart}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>Alerts & Notifications</h2>
          <span className={s.span}>
            You can set up Themesberg to get notifications
          </span>
        </div>
        <AlertList />
      </div>
      <div className={s.cart}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>Email Notifications</h2>
          <span className={s.span}>
            You can set up Themesberg to get email notifications
          </span>
        </div>
        <EmailList />
      </div>
    </div>
  );
};

export default Notifications;
