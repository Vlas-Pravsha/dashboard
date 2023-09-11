import React from "react";
import s from "./Qustion.module.scss";

export type DataItem = {
  title: string;
  variants: string[];
  correct: number;
};

interface QustionProps {
  question: DataItem;
}

const Qustion = ({ question }: QustionProps) => {
  return (
    <div>
      <span>{question.title}</span>
      {question.variants.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Qustion;
