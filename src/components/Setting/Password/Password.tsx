"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Modal from "./modal/Modal";
import s from "./Password.module.scss";

export interface RegisterItem {
  New: string;
  Current: string;
  Confirm: string;
}
const Password = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [data, setData] = React.useState<RegisterItem>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterItem>();
  const onSubmit = (data: RegisterItem) => {
    setData(data);
    setIsVisible(true);
    console.log(data);
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.title}>Password information</h2>
      <div className={s.lineWrapper}>
        <Label
          title="Current password"
          text="Tip"
          errorText="Invalid password"
          hasError={errors.Current}
        >
          <Input
            hasError={errors.Current}
            placeholder="********"
            type="password"
            {...register("Current", {
              required: true,
            })}
          />
        </Label>
        <Label
          errorText="Invalid password"
          hasError={errors.New}
          text="Tip"
          title="New password"
        >
          <Input
            type="password"
            hasError={errors.New}
            placeholder="********"
            {...register("New", {
              required: true,
            })}
          />
        </Label>
      </div>
      <div className={s.hiddenWrapper}>
        <Label
          errorText="Invalid password"
          hasError={errors.Confirm}
          text="Tip"
          title="Confirm password"
        >
          <Input
            type="password"
            hasError={errors.Confirm}
            placeholder="********"
            {...register("Confirm", {
              required: true,
            })}
          />
        </Label>
        <div className={s.hiddenElement}></div>
      </div>
      {isVisible && (
        <Modal data={data} onClose={() => setIsVisible(!isVisible)} />
      )}
      <Button>Save all</Button>
    </form>
  );
};

export default Password;
