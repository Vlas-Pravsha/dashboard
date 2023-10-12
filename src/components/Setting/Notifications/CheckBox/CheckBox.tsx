import React from "react";
import s from "./CheckBox.module.scss";
interface CheckBoxProps {
  status: boolean;
  changeStatus?: () => void;
}
const CheckBox = ({ status, changeStatus }: CheckBoxProps) => {
  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={status}
        onChange={changeStatus}
      />
    </div>
  );
};

export default CheckBox;
