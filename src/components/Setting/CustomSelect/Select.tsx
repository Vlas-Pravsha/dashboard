"use client";
import React from "react";
import { FieldError } from "react-hook-form";
import s from "./Select.module.scss";

type Selectitem = {
  title: string;
};

interface SelectProps {
  title: string;
  hasError: FieldError | undefined;
}

const selectItem = [
  { value: "Front End", id: 1 },
  { value: "Back End", id: 2 },
  { value: "Full Stack", id: 3 },
  { value: "Other", id: 4 },
];

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ title, hasError, ...rest }, ref) => {
    const [selected, setSelected] = React.useState("");
    const [open, setOpen] = React.useState(false);

    function changeSelectItem(item: string) {
      setSelected(item);
      setOpen(false);
    }
    const toggle = () => setOpen(!open);

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
