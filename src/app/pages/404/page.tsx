import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import s from "./404.module.scss";
const page = () => {
  return (
    <div className={s.test}>
      <div className={s.wrapper}>
        <Image
          src="/Img/PagesImg/404.svg"
          alt="Maintenance"
          width="500"
          height="500"
          className={s.img}
        />
        <div className={s.textWrapper}>
          <h2 className={s.title}>Page not found</h2>
          <p className={s.text}>
            Oops! Looks like you followed a bad link. If you think this is a
            problem with us, please tell us.
          </p>
          <Button>Go back home</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
