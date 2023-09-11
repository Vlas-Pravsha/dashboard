import React from "react";
import s from "./Input.module.scss";

interface InputProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}

const Input = ({ setSearchValue, searchValue }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        className={s.input}
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </div>
  );
};

export default Input;
