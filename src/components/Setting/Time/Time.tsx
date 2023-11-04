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

export interface RegisterItem {
  Language: string;
  Time: string;
}

const Time = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [data, setData] = React.useState<RegisterItem>();
  const { register, handleSubmit } = useForm<RegisterItem>();
  const languageOptions = useSelector(
    (state: RootState) => state.settings.languageOptions
  );
  const timeOptions = useSelector(
    (state: RootState) => state.settings.timeOptions
  );
  const onSubmit = (formData: RegisterItem | undefined) => {
    if (formData) {
      console.log(formData);
      setData(formData);
      setIsVisible(true);
    }
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
