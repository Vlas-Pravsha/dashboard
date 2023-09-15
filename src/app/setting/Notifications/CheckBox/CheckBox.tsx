import React from "react";
import s from "./CheckBox.module.scss";
interface CheckBoxProps {
  status: boolean;
}
const CheckBox = ({ status }: CheckBoxProps) => {
  return (
    <div className={s.wrapper}>
      <input type="checkbox" className={s.checkbox} checked={status} />
    </div>
  );
};

export default CheckBox;
