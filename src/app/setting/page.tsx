"use client";
import React, { useState } from "react";
import s from "./Setting.module.scss";
import General from "./General/General";
import Profile from "./Profile/Profile";
import Time from "./Time/Time";
import Social from "./Social/Social";
import Password from "./Password/Password";
import Accounts from "./Accounts/Accounts";
import Sessions from "./Sessions/Sessions";
import Footer from "./Footer/Footer";
import Notifications from "./Notifications/Notifications";

const Setting = () => {
  return (
    <>
      <div className={s.wrapper}>
        <h2 className={s.title}>User settings</h2>
        <div className={s.contentWrapper}>
          <div className={s.q}>
            <Profile></Profile>
            <div>
              <Time></Time>
            </div>
            <div>
              <Social></Social>
            </div>
            <Accounts></Accounts>
          </div>
          <div>
            <General></General>
            <Password></Password>
            <Sessions></Sessions>
          </div>
        </div>
      </div>
      <Notifications></Notifications>
      <Footer></Footer>
      <div className={s.footerText}>© 2023 Dashboard.com. My Best Project.</div>
    </>
  );
};

export default Setting;
