import React from "react";
import s from "./Select.module.scss";

type LanguageOption = {
  id: number;
  value: string;
};

interface SelectProps {
  selectOptions: LanguageOption[];
}

const Select = ({ selectOptions }: SelectProps) => {
  return (
    <select className={s.select}>
      {selectOptions.map((item) => (
        <option key={item.id} value={item.id}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
