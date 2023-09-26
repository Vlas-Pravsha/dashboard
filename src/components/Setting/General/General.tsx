"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import s from "./General.module.scss";

// const radioInputData = [
//   { id: 1, value: "Trainee" },
//   { id: 2, value: "Junior" },
//   { id: 3, value: "Middle" },
//   { id: 4, value: "Senior" },
// ];

export type RegisterItem = {
  Radio: string;
  required: boolean;
  Country: string;
  Username: string;
  Name: string;
  Sername: string;
  City: string;
  Address: string;
  Number: string;
  Email: string;
  Birthday: string;
  Organization: string;
  Role: string;
  Department: string;
  Сode: string;
  Current: string;
  New: string;
  Confirm: string;
};
const General = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterItem>();
  const onSubmit = (data: RegisterItem) => {
    console.log(data);
  };

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
      <h2 className={s.title}>General information</h2>
      <div className={s.lineWrapper}>
        <Label
          title="First name"
          text="Tip"
          errorText="Invalid name"
          hasError={errors.Name}
        >
          <Input
            hasError={errors.Name}
            placeholder="Bonnie"
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
          title="Last name"
        >
          <Input
            hasError={errors.Sername}
            placeholder="Green"
            {...register("Sername", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
      </div>
      <div className={s.lineWrapper}>
        <Label
          title="Country"
          text="Tip"
          errorText="Invalid Country"
          hasError={errors.Name}
        >
          <Input
            hasError={errors.Name}
            placeholder="United States"
            {...register("Country", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
        <Label
          errorText="Invalid City"
          hasError={errors.Country}
          text="Tip"
          title="City"
        >
          <Input
            hasError={errors.City}
            placeholder="e.g. San Francisco"
            {...register("City", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
      </div>
      <div className={s.lineWrapper}>
        <Label
          title="Address"
          text="Tip"
          errorText="Invalid Address"
          hasError={errors.Name}
        >
          <Input
            hasError={errors.Address}
            placeholder="e.g. California"
            {...register("Address", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
        <Label
          errorText="Invalid Email"
          hasError={errors.Email}
          text="Tip"
          title="Email"
        >
          <Input
            hasError={errors.Email}
            placeholder="example@company.com"
            {...register("Email", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
      </div>
      <div className={s.lineWrapper}>
        <Label
          title="Phone Number"
          text="Tip"
          errorText="Invalid Phone Number"
          hasError={errors.Number}
        >
          <Input
            hasError={errors.Number}
            placeholder="e.g. +1 123 456 7890"
            {...register("Number", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
        <Label
          errorText="Invalid Birthday"
          hasError={errors.Birthday}
          text="Tip"
          title="Birthday"
        >
          <Input
            hasError={errors.Birthday}
            placeholder="01/01/2000"
            {...register("Birthday", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
      </div>
      <div className={s.lineWrapper}>
        <Label
          title="Organization"
          text="Tip"
          errorText="Invalid Organization"
          hasError={errors.Organization}
        >
          <Input
            hasError={errors.Organization}
            placeholder="Company Name"
            {...register("Organization", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
        <Label
          errorText="Invalid Role"
          hasError={errors.Sername}
          text="Tip"
          title="Role"
        >
          <Input
            hasError={errors.Role}
            placeholder="React Developer"
            {...register("Role", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
      </div>
      <div className={s.lineWrapper}>
        <Label
          title="Department"
          text="Tip"
          errorText="Invalid Department"
          hasError={errors.Name}
        >
          <Input
            hasError={errors.Department}
            placeholder="Development"
            {...register("Department", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
        <Label
          errorText="Invalid code"
          hasError={errors.Sername}
          text="Tip"
          title="Zip/postal code"
        >
          <Input
            hasError={errors.Sername}
            placeholder="Green"
            {...register("Сode", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /[a-zA-Z]+/g,
            })}
          />
        </Label>
      </div>
      <Button>Save all</Button>
    </div>
  );
};

export default General;