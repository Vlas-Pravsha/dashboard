import React from "react";
import Image from "next/image";
import Add from "../../../assets/Img/NodeImg/circle-plus-solid.svg";

import s from "./AddTodoList.module.scss";

interface AddTodoListProps {
  addTodoList: (title: string) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const AddTodoList: React.FC<AddTodoListProps> = ({
  addTodoList,
  searchValue,
  setSearchValue,
  error,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodoList(searchValue);
    }
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Add TodoList</h1>
      <div className={s.errorWrapper}>
        <input
          type="text"
          className={`${error ? s.error : s.input}`}
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          onKeyPress={handleKeyPress} // Добавляем обработчик события
        />
        <span className={error ? s.errorMessage : ""}>{error}</span>
      </div>
      <Image
        src={Add}
        alt="Add"
        className={s.addTodoListImg}
        onClick={() => addTodoList(searchValue)}
      />
    </div>
  );
};

export default AddTodoList;
