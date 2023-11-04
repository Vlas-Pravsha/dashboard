import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckBox from "../CheckBox/CheckBox";
import { changeAlertsStatus } from "@/store/slices/Settings/SettingsSlice";
import { RootState } from "@/store/store";
import s from "./AlertList.module.scss";
import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import Modal from "./modal/Modal";

export interface RegisterItem {
  status: string[];
  id: string;
}

const AlertList = () => {
  const { register, handleSubmit } = useForm<RegisterItem>();
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<RegisterItem | undefined>();

  const handleToogleFn = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = (formData: RegisterItem | undefined) => {
    if (formData) {
      setData(formData);
      setIsVisible(true);
      console.log(formData.status);
    }
  };

  const dispatch = useDispatch();
  const alertsData = useSelector(
    (state: RootState) => state.settings.alertsData
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
      {alertsData.map((item) => (
        <div key={item.id} className={s.content}>
          <div className={s.q}>
            <h2 className={s.title}>{item.title}</h2>
            <span className={s.span}>{item.text}</span>
          </div>
          <CheckBox
            {...register("status")}
            value={item.title}
            status={item.status}
            changeStatus={() => dispatch(changeAlertsStatus(item.id))}
          />
        </div>
      ))}
      <Button>Save all</Button>
      {isVisible && <Modal data={data} onClose={handleToogleFn} />}
    </form>
  );
};

export default AlertList;
