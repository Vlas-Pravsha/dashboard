"use client";
import Accounts from "@/components/Setting/Accounts/Accounts";
import General from "@/components/Setting/General/General";
import Profile from "@/components/Setting/Profile/Profile";
import Social from "@/components/Setting/Social/Social";
import Time from "@/components/Setting/Time/Time";
import React, { useState } from "react";
import s from "./Setting.module.scss";
import Password from "../../components/Setting/Password/Password";
import Sessions from "@/components/Setting/Sessions/Sessions";
import Notifications from "@/components/Setting/Notifications/Notifications";
import Footer from "@/components/Footer/Footer";

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
          <div className={s.p}>
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
