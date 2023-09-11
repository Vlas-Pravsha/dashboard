import React from "react";
import s from "./Radio.module.scss";
import { UseFormRegister } from "react-hook-form";

type RadioInputitem = {
  id: number;
  value: string;
};

interface RadioProps {
  radioInputData: RadioInputitem[];
  selectedValue: string;
  handleValueChange: (value: string) => void;
  register: UseFormRegister<any>;
  errors: any;
}

const Radio = ({
  radioInputData,
  selectedValue,
  handleValueChange,
  register,
  errors,
}: RadioProps) => {
  function handleChangeRadio(newValue: string): void {
    handleValueChange(newValue);
  }

  return (
    <>
      <div className={s.radioWrapper}>
        {radioInputData.map((item) => (
          <label className={s.radioItemWrapper} key={item.id}>
            <input
              {...register("Radio", { required: true })}
              type="radio"
              className={s.radio}
              value={item.value}
              checked={selectedValue === item.value}
              onChange={(e) => handleChangeRadio(e.target.value)}
            />
            <span className={s.dote}></span>
            {/* <span className={`${errors.Radio ? s.textError : s.text}`}> */}
            <span className={s.text}>{item.value}</span>
            {/* </span> */}
          </label>
        ))}
      </div>
      {errors.Radio && <span className={s.error}>This field is required</span>}
    </>
  );
};

export default Radio;
