"use client";
import React, { useState } from "react"; // Added useState import
import Link from "next/link";
import Button from "./Button/Button";
import Radio from "./CustomRadioInput/Radio";
import Select from "./CustomSelect/Select";
import Input from "./Input/Input";
import Label from "./Label/Label";
import s from "./Registration.module.scss";
import Upload from "./Upload/Upload";
import { useForm } from "react-hook-form";

export type RegisterItem = {
  Radio: string;
  required: boolean;
  Development: string;
  Username: string;
  Name: string;
  Sername: string;
  Email: string;
  Phone: string;
  Area: string;
};

const radioInputData = [
  { id: 1, value: "Trainee" },
  { id: 2, value: "Junior" },
  { id: 3, value: "Middle" },
  { id: 4, value: "Senior" },
];

const Registration = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterItem>();

  const onSubmit = (data: RegisterItem) => {
    console.log(data);
  };
  const toggle = () => setOpen(!open);
  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <button onClick={toggle}>Show</button>
      {open && (
        <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.formWrapper}>
            <div className={s.titleWrapper}>
              <h2 className={s.title}>Registration Form</h2>
            </div>
            <div className={s.contentWrapper}>
              <div className={s.fullNameWrapper}>
                <Label
                  title="Full name"
                  text="Tip"
                  errorText="Invalid name"
                  hasError={errors.Name}
                >
                  <Input
                    hasError={errors.Name}
                    placeholder="First name"
                    {...register("Name", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                      pattern: /[a-zA-Z]+/g,
                    })}
                  />
                </Label>
                <Label
                  errorText="Invalid sername"
                  hasError={errors.Sername}
                  text="Tip"
                >
                  <Input
                    hasError={errors.Sername}
                    placeholder="Last name"
                    {...register("Sername", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                      pattern: /[a-zA-Z]+/g,
                    })}
                    aria-invalid={errors.Sername ? "true" : "false"}
                  />
                </Label>
              </div>
              <Label
                text="Tip"
                title="Username"
                errorText="Invalid username"
                hasError={errors.Username}
              >
                <Input
                  hasError={errors.Username}
                  placeholder="Username"
                  {...register("Username", {
                    required: true,
                    maxLength: 20,
                    minLength: 2,
                    pattern: /[a-zA-Z]+/g,
                  })}
                />
              </Label>
              <Label
                text="Tip"
                errorText="Invalid email"
                hasError={errors.Email}
                title="Email"
              >
                <Input
                  hasError={errors.Email}
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    maxLength: 20,
                    minLength: 2,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                />
              </Label>
              <div className={s.phoneWrapper}>
                <Label
                  text="Tip"
                  errorText="Area code is required"
                  hasError={errors.Area}
                  title="Phone"
                >
                  <Input
                    hasError={errors.Area}
                    placeholder="Area code"
                    {...register("Area", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                    })}
                  />
                </Label>
                <Label
                  text="Tip"
                  errorText="Invalid phone"
                  hasError={errors.Phone}
                >
                  <Input
                    hasError={errors.Phone}
                    placeholder="Phone"
                    {...register("Phone", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                    })}
                  />
                </Label>
              </div>
              <Label title="Select">
                <Select
                  hasError={errors.Development}
                  title="Choose Option"
                  {...register("Development", { required: true })}
                ></Select>
              </Label>
              <div>
                <Label title="Radio">
                  <Radio
                    radioInputData={radioInputData}
                    handleValueChange={handleValueChange}
                    selectedValue={selectedValue}
                    register={register}
                    errors={errors}
                  />
                </Label>
              </div>
              <Button type={"submit"}>Submit</Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Registration;
