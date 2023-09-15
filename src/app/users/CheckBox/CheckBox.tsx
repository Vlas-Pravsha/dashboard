import React from "react";
import s from "./CheckBoxUser.module.scss";

const CheckBox = () => {
  return (
    <div className={s.wrapper}>
      <input type="checkbox" className={s.input} />
    </div>
  );
};

export default CheckBox;
