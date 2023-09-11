import React from "react";
import s from "./CheckBox.module.scss";

interface CheckBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
const CheckBox = ({ onChange, checked }: CheckBoxProps) => {
  return (
    <div className={s.checkboxWrapper}>
      <input
        type="checkbox"
        className={s.checkboxWrapper}
        onChange={onChange}
        checked={checked}
      />
      <div className={s.text}></div>
    </div>
  );
};

export default CheckBox;
