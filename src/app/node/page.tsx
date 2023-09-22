"use client";
import AddTodoList from "@/components/Node/AddTodoList/AddTodoList";
import TodoList from "@/components/Node/TodoList/Todolist";
import React, { useState } from "react";
import s from "./Node.module.scss";

const Node = () => {
  const [todoLists, setTodoLists] = useState<JSX.Element[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [error, setError] = useState("");

  const addTodoList = (title: string) => {
    const newTodoLists = [
      ...todoLists,
      <TodoList key={todoLists.length} title={title} />,
    ];
    if (searchValue.length > 0 && searchValue.length <= 15) {
      setTodoLists(newTodoLists);
      setError("");
      setSearchValue("");
    } else {
      setError("Title length must be between 1 and 15 characters");
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.todolist}>
        <div>
          <AddTodoList
            addTodoList={addTodoList}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            error={error}
          />
        </div>
        <TodoList title="New TodoList" />
        {todoLists.map((todoList, index) => (
          <div key={index}>{todoList}</div>
        ))}
      </div>
    </div>
  );
};

export default Node;
