import React from "react";
import s from "./CheckBox.module.scss";
interface CheckBoxProps {
  status: boolean;
  changeStatus?: () => void;
  value: string;
}
const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  function InputComponent({ status, changeStatus, value, ...rest }, ref) {
    return (
      <div className={s.wrapper}>
        <input
          {...rest}
          ref={ref}
          type="checkbox"
          className={s.checkbox}
          checked={status}
          onChange={changeStatus}
          value={value}
        />
      </div>
    );
  }
);
CheckBox.displayName = "CheckBox";
export default CheckBox;
