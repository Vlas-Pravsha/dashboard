import React from "react";
import s from "./Buttons.module.scss";

interface ButtonsProps {
  changeFilter: (value: string) => void;
  filter: string;
}

const Buttons = ({ changeFilter, filter }: ButtonsProps) => {
  return (
    <div className={s.status}>
      <button
        onClick={() => changeFilter("all")}
        className={`${filter === "all" ? s.active : ""}`}
      >
        All
      </button>
      <button
        onClick={() => changeFilter("active")}
        className={`${filter === "active" ? s.active : ""}`}
      >
        Active
      </button>
      <button
        onClick={() => changeFilter("completed")}
        className={`${filter === "completed" ? s.active : ""}`}
      >
        Completed
      </button>
    </div>
  );
};

export default Buttons;
