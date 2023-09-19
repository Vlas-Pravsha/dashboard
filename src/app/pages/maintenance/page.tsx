import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import s from "./Mainternance.module.scss";

const Maintenance = () => {
  return (
    <div className={s.test}>
      <div className={s.wrapper}>
        <Image
          src="/Img/PagesImg/maintenance.svg"
          alt="Maintenance"
          width="450"
          height="450"
          className={s.img}
        />
        <div className={s.textWrapper}>
          <h2 className={s.title}>Under Maintenance</h2>
          <p className={s.text}>
            Sorry for the inconvenience but we are performing some maintenance
            at the moment. If you need to you can always
            <a href="" className={s.link}>
              {` ${"contact us"}`}
            </a>
            , otherwise we will be back online shortly!.
          </p>
          <Button>Go back home</Button>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
