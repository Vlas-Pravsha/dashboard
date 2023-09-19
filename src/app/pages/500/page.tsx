import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import s from "./500.module.scss";
const page = () => {
  return (
    <div className={s.test}>
      <div className={s.wrapper}>
        <Image
          src="/Img/PagesImg/500.svg"
          alt="Maintenance"
          width="520"
          height="520"
          className={s.img}
        />
        <div className={s.textWrapper}>
          <h2 className={s.title}>Something has gone seriously wrong</h2>
          <p className={s.text}>
            It is always time for a coffee break. We should be back by the time
            you finish your coffee.
          </p>
          <Button>Go back home</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
