"use client";
import React, { useState } from "react";
import s from "./TodoList.module.scss";
import Add from "../../../assets/Img/circle-plus-solid.svg";
import Edit from "../../../assets/Img/pen-solid.svg";
import Delete from "../../../assets/Img/trash-solid.svg";
import Save from "../../../assets/Img/share-solid.svg";
import Image from "next/image";
import CheckBox from "../AddTodoList/CheckBox/CheckBox";
import { v1 } from "uuid";

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

  let tasksForTodoList = tasks;

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
      <div className={s.todolist}>
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
              src={Add}
              alt="Add"
              className={s.add}
              onClick={() => addTodoTask()}
            />

            <span className={error ? s.errorMessage : ""}>{error}</span>
          </div>
        </div>
        <div>
          {tasksForTodoList.map((task) => (
            <div key={task.id} className={s.taskWrapper}>
              {edit === task.id ? (
                <div>
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={s.taskInput}
                  />
                </div>
              ) : (
                <div className={s.qq}>
                  <CheckBox
                    onChange={() => changeStatus(task.id)}
                    checked={task.status}
                  ></CheckBox>
                  <div className={task.status ? s.completed : ""}>
                    {task.title}
                  </div>
                </div>
              )}
              {edit === task.id ? (
                <div>
                  <Image
                    src={Save}
                    alt="Save"
                    className={s.save}
                    onClick={() => saveTodo(task.id)}
                  />
                </div>
              ) : (
                <div className={s.imgQ}>
                  <Image
                    src={Edit}
                    alt="Edit"
                    className={s.edit}
                    onClick={() => editTodo(task.id, task.title)}
                  />
                  <Image
                    src={Delete}
                    alt="Delete"
                    className={s.delete}
                    onClick={() => deleteTask(task.id)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default TodoList;
