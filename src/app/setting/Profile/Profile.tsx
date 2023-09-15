import Image from "next/image";
import React from "react";
import s from "./Profile.module.scss";
import Button from "../Button/Button";

const Profile = () => {
  return (
    <div className={s.wrapper}>
      <Image
        src="/Img/SettingImg/neil-sims.png"
        alt="Avatar"
        height="112"
        width="112"
        className={s.avatar}
      ></Image>
      <div className={s.contentWrapper}>
        <div className={s.textWrapper}>
          <h2 className={s.title}>Profile picture</h2>
          <p className={s.text}>JPG, GIF or PNG. Max size of 800K</p>
        </div>
        <div className={s.buttonWrapper}>
          <Button type="third">Upload Picture</Button>
          <Button type="secondary">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
