import React from "react";
import s from "./TodoItem.module.scss";
import CheckBox from "../AddTodoList/CheckBox/CheckBox";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setValue } from "@/store/slices/Node/NodeSlice";

const TodoItem = ({
  task,
  changeStatus,
  deleteTask,
  edit,
  value,
  saveTodo,
  editTodo,
}: any) => {
  const dispatch = useDispatch();
  return (
    <div key={task.id} className={s.taskWrapper}>
      {edit === task.id ? (
        <div>
          <input
            value={value}
            onChange={(e) => dispatch(setValue(e.target.value))}
            className={s.taskInput}
          />
        </div>
      ) : (
        <div className={s.qq}>
          <CheckBox
            onChange={() => changeStatus(task.id)}
            checked={task.status}
          ></CheckBox>
          <div className={task.status ? s.completed : ""}>{task.title}</div>
        </div>
      )}
      {edit === task.id ? (
        <div>
          <Image
            src={"/Img/NodeImg/share-solid.svg"}
            alt="Save"
            className={s.save}
            onClick={() => saveTodo(task.id)}
            width="30"
            height="30"
          />
        </div>
      ) : (
        <div className={s.imgQ}>
          <Image
            src={"/Img/NodeImg/pen-solid.svg"}
            alt="Edit"
            className={s.edit}
            onClick={() => editTodo(task.id, task.title)}
            width="30"
            height="30"
          />
          <Image
            src={"/Img/NodeImg/trash-solid.svg"}
            alt="Delete"
            className={s.delete}
            onClick={() => deleteTask(task.id)}
            width="30"
            height="30"
          />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
