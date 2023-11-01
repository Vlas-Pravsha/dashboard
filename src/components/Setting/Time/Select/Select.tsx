import React from "react";
import s from "./Select.module.scss";

type LanguageOption = {
  id: number;
  value: string;
};

interface SelectProps {
  selectOptions: LanguageOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ selectOptions, ...rest }, ref) => (
    <select className={s.select} {...rest} ref={ref}>
      {selectOptions.map((item) => (
        <option key={item.id} value={item.value}>
          {item.value}
        </option>
      ))}
    </select>
  )
);
Select.displayName = "Select";
export default Select;
