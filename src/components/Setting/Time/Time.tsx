"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Modal from "./modal/Modal";
import Select from "./Select/Select";
import s from "./Time.module.scss";

const Time = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [data, setData] = React.useState();
  const { register, handleSubmit } = useForm();
  const languageOptions = useSelector(
    (state: RootState) => state.settings.languageOptions
  );
  const timeOptions = useSelector(
    (state: RootState) => state.settings.timeOptions
  );
  const onSubmit = (data: any) => {
    console.log(data);
    setData(data);
    setIsVisible(true);
  };
  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.title}>Language & Time</h2>
      <Label title="Select language">
        <Select selectOptions={languageOptions} {...register("Language")} />
      </Label>
      <Label title="Time Zone">
        <Select selectOptions={timeOptions} {...register("Time")} />
      </Label>
      {isVisible && (
        <Modal data={data} onClose={() => setIsVisible(!isVisible)} />
      )}
      <Button>Save all</Button>
    </form>
  );
};

export default Time;
