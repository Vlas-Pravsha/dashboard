"use client";
import React, { useState } from "react";
import s from "./TodoList.module.scss";
import Image from "next/image";
import { v1 } from "uuid";
import Buttons from "../Buttons/Buttons";
import TodoItem from "../TodoItem/TodoItem";

type Task = {
  id: string;
  title: string;
  status: boolean;
};

interface TodoListProps {
  title: string;
}

const TodoList = ({ title }: TodoListProps) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: "First task", status: true },
    { id: v1(), title: "Second task", status: false },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  const [edit, setEdit] = useState<string | null>(null);
  const [value, setValue] = useState("");

  function editTodo(id: string, title: string) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: value } : task
    );
    setTasks(updatedTasks);
    setEdit(null);
  }

  let tasksForTodoList = [...tasks];

  if (filter === "completed") {
    tasksForTodoList = tasks.filter((t) => t.status === true);
  } else if (filter === "active") {
    tasksForTodoList = tasks.filter((t) => t.status === false);
  }

  function changeFilter(value: string) {
    setFilter(value);
  }

  function addTask(newTitle: string) {
    const newTask: Task = { id: v1(), title: newTitle, status: false };
    setTasks([...tasks, newTask]);
    setSearchValue("");
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function searchTask(value: string) {
    setSearchValue(value);
  }

  function changeStatus(taskId: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
  }

  function addTodoTask() {
    if (searchValue.length > 0 && searchValue.length <= 13) {
      addTask(searchValue);
      setError("");
    } else {
      setError("Task length must be between 1 and 13 characters");
    }
  }
  function onKeyPressAddTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (searchValue.length > 0 && searchValue.length <= 13) {
        addTask(searchValue);
        setError("");
      } else {
        setError("Task length must be between 1 and 13 characters");
      }
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.q}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.inputWrap}>
          <input
            type="text"
            className={`${error ? s.error : s.input}`}
            placeholder="Add task"
            value={searchValue}
            onChange={(e) => searchTask(e.target.value)}
            onKeyPress={(e) => onKeyPressAddTask(e)}
          />
          <Image
            src={"/Img/NodeImg/circle-plus-solid.svg"}
            alt="Add"
            width="30"
            height="30"
            className={s.add}
            onClick={() => addTodoTask()}
          />

          <span className={error ? s.errorMessage : ""}>{error}</span>
        </div>
      </div>
      {tasksForTodoList.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
          edit={edit}
          value={value}
          setValue={setValue}
          saveTodo={saveTodo}
          editTodo={editTodo}
        />
      ))}
      <Buttons changeFilter={changeFilter} filter={filter}></Buttons>
    </div>
  );
};

export default TodoList;
