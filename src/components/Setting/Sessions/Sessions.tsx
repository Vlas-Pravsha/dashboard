import React from "react";
import Button from "../Button/Button";
import s from "./Sessions.module.scss";

const sessionsData = [
  {
    id: 1,
    title: "California 123.123.123.123",
    text: "Chrome on macOS",
    svg: (
      <svg
        className={s.svg}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Rome 24.456.355.98",
    text: "Safari on iPhone",
    svg: (
      <svg
        className={s.svg}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
];

const Sessions = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.mainTitle}>General information</h2>
      <div className={s.content}>
        {sessionsData.map((item) => (
          <div key={item.id} className={s.cart}>
            <div className={s.svgTextWrapper}>
              {item.svg}
              <div className={s.textWrapper}>
                <div className={s.title}>{item.title}</div>
                <div className={s.text}>{item.text}</div>
              </div>
            </div>
            <Button type="secondary">Revoke</Button>
          </div>
        ))}
      </div>
      <Button>See more</Button>
    </div>
  );
};

export default Sessions;
