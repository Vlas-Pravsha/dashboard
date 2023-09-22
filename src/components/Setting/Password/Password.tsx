import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { RegisterItem } from "../General/General";
import Input from "../Input/Input";
import Label from "../Label/Label";
import s from "./Password.module.scss";

const Password = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterItem>();
  const onSubmit = (data: RegisterItem) => {
    console.log(data);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Password information</h2>
      <div className={s.lineWrapper}>
        <Label
          title="Current password"
          text="Tip"
          errorText="Invalid password"
          hasError={errors.Name}
        >
          <Input
            hasError={errors.Current}
            placeholder="********"
            {...register("Current", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
        <Label
          errorText="Invalid password"
          hasError={errors.Sername}
          text="Tip"
          title="New password"
        >
          <Input
            hasError={errors.New}
            placeholder="********"
            {...register("New", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
      </div>
      <div className={s.hiddenWrapper}>
        <Label
          errorText="Invalid password"
          hasError={errors.Sername}
          text="Tip"
          title="Confirm password"
        >
          <Input
            hasError={errors.Confirm}
            placeholder="********"
            {...register("Confirm", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
        <div className={s.hiddenElement}></div>
      </div>
      <Button>Save all</Button>
    </div>
  );
};

export default Password;
