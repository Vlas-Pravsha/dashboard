import React from "react";
import Image from "next/image";
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
        src="/Img/NodeImg/circle-plus-solid.svg"
        alt="Add"
        onClick={() => addTodoList(searchValue)}
        width="30"
        height="30"
        className={s.addTodoListImg}
      />
    </div>
  );
};

export default AddTodoList;
