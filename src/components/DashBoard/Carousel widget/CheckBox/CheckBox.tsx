import React from "react";
import s from "./CheckBox.module.scss";
import { BsCheck } from "react-icons/bs";

const CheckBox = () => {
  return (
    <div className={s.wrapper}>
      <BsCheck className={s.svg} />
    </div>
  );
};

export default CheckBox;
