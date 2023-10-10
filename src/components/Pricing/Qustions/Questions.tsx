import React from "react";
import { v1 } from "uuid";
import s from "./Qustions.module.scss";

interface QuestionsProps {
  questionsData: Question[];
}
type Question = {
  id: string;
  title: string;
  answer: string | React.ReactNode;
};

const Questions = ({ questionsData }: QuestionsProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {questionsData.map((question) => (
          <div className={s.questionWrapper} key={question.id}>
            <h2 className={s.title}>{question.title}</h2>
            <div className={s.answer}>{question.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
