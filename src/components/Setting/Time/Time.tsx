import React from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Select from "./Select/Select";
import s from "./Time.module.scss";

const languageOptions = [
  { id: 1, value: "English" },
  { id: 2, value: "Spanish" },
  { id: 3, value: "French" },
  { id: 4, value: "German" },
  { id: 5, value: "Italian" },
  { id: 6, value: "Ukrainian" },
];

const timeOptions = [
  { id: 1, value: "GMT+2 Eastern Europe Time (EET)" },
  { id: 2, value: "GMT+3 Moscow Time (MSK)" },
  { id: 3, value: "GMT+4 Casablanca Time (CET)" },
  { id: 4, value: "GMT+5 Kolkata Time (IST)" },
  { id: 5, value: "GMT+6 Bangkok Time (BTT)" },
  { id: 6, value: "GMT+7 Jakarta Time (WIB)" },
  { id: 7, value: "GMT+8 Beijing Time (CST)" },
];

const Time = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Language & Time</h2>
      <Label title="Select language">
        <Select selectOptions={languageOptions} />
      </Label>
      <Label title="Time Zone">
        <Select selectOptions={timeOptions} />
      </Label>
      <Button>Save all</Button>
    </div>
  );
};

export default Time;
