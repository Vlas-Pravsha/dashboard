import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Select from "./Select/Select";
import s from "./Time.module.scss";

const Time = () => {
  const languageOptions = useSelector(
    (state: RootState) => state.settings.languageOptions
  );
  const timeOptions = useSelector(
    (state: RootState) => state.settings.timeOptions
  );

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
