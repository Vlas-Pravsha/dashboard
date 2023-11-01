"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { v1 } from "uuid";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import s from "./General.module.scss";
import Modal from "./modal/Modal";

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
  Code: string;
  Current: string;
  New: string;
  Confirm: string;
};
const General = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [data, setData] = React.useState<RegisterItem>();

  const handleToogleFn = () => {
    setIsVisible(!isVisible);
  };

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

  const InputsArray = [
    {
      id: v1(),
      errorText: "Invalid name",
      title: "First name",
      text: "Tip",
      hasError: errors.Name,
      placeholder: "Bonnie",
      register: "Name" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid sername",
      title: "Last name",
      text: "Tip",
      hasError: errors.Sername,
      placeholder: "Green",
      register: "Sername" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid country",
      title: "Country",
      text: "Tip",
      hasError: errors.Country,
      placeholder: "United States",
      register: "Country" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid city",
      title: "City",
      text: "Tip",
      hasError: errors.City,
      placeholder: "New York",
      register: "City" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid address",
      title: "Address",
      text: "Tip",
      hasError: errors.Address,
      placeholder: "e.g. San Francisco",
      register: "Address" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid email",
      title: "Email",
      text: "Tip",
      hasError: errors.Email,
      placeholder: "example@company.com",
      register: "Email" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid number",
      title: "Number",
      text: "Tip",
      hasError: errors.Number,
      placeholder: "e.g. 123 456 7890",
      register: "Number" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid birthday",
      title: "Birthday",
      text: "Tip",
      hasError: errors.Birthday,
      placeholder: "e.g. 01/01/2000",
      register: "Birthday" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid organization",
      title: "Organization",
      text: "Tip",
      hasError: errors.Organization,
      placeholder: "Company Name",
      register: "Organization" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid role",
      title: "Role",
      text: "Tip",
      hasError: errors.Role,
      placeholder: "React Developer",
      register: "Role" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid department",
      title: "Department",
      text: "Tip",
      hasError: errors.Department,
      placeholder: "Development",
      register: "Department" as keyof RegisterItem,
    },
    {
      id: v1(),
      errorText: "Invalid code",
      title: "Code",
      text: "Tip",
      hasError: errors.Code,
      placeholder: "e.g. 123456",
      register: "Code" as keyof RegisterItem,
    },
  ];

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.title}>General information</h2>
      <div className={s.lineWrapper}>
        {InputsArray.map((item) => (
          <Label
            key={item.id}
            title={item.title}
            text={item.text}
            errorText={item.errorText}
            hasError={item.hasError}
          >
            <Input
              hasError={item.hasError}
              placeholder={item.placeholder}
              {...register(item.register, {
                required: true,
                maxLength: 20,
                minLength: 2,
                pattern: /[a-zA-Z]+/g,
              })}
            />
          </Label>
        ))}
      </div>
      {isVisible && <Modal data={data} onClose={handleToogleFn} />}
      <Button>Save all</Button>
    </form>
  );
};

export default General;
