"use client";
import { setOpen, setSelected } from "@/store/slices/Settings/SettingsSlice";
import { RootState } from "@/store/store";
import React from "react";
import { FieldError } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import s from "./Select.module.scss";

type Selectitem = {
  title: string;
};

interface SelectProps {
  title: string;
  hasError: FieldError | undefined;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ title, hasError, ...rest }, ref) => {
    const dispatch = useDispatch();
    const selectItem = useSelector(
      (state: RootState) => state.settings.selectItem
    );
    const selected = useSelector((state: RootState) => state.settings.selected);
    const open = useSelector((state: RootState) => state.settings.selectOpen);

    function changeSelectItem(item: string) {
      dispatch(setSelected(item));
      dispatch(setOpen(false));
    }
    const toggle = () => dispatch(setOpen(!open));

    return (
      <div className={s.wrapper} {...rest}>
        <div onClick={toggle}>
          {selected ? (
            <div className={s.selectedValue}>{selected}</div>
          ) : (
            <div className={s.selectedValue} onClick={toggle}>
              {title}
            </div>
          )}
        </div>
        <div className={s.content}>
          {open &&
            selectItem.map((item) => (
              <div
                onClick={() => changeSelectItem(item.value)}
                className={s.selectItem}
                key={item.id}
                ref={ref}
              >
                {item.value}
              </div>
            ))}
        </div>
        {hasError && (
          <span className={s.errorText}>This field is required</span>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
export default Select;
