"use client";
import React from "react";
import Qustion, { DataItem } from "../Qustion/Qustion";
import s from "./QustionList.module.scss";

const questions: DataItem[] = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

const QustionList = () => {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  return (
    <div>
      <Qustion question={question} />
    </div>
  );
};

export default QustionList;
