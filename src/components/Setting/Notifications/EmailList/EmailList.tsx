import { changeEmailStatus } from "@/store/slices/Settings/SettingsSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import s from "./EmailList.module.scss";
import Modal from "./modal/Modal";

export interface RegisterItem {
  status: string[];
  id: string;
}
const EmailList = () => {
  const emailData = useSelector((state: RootState) => state.settings.emailData);
  const [isVisible, setIsVisible] = React.useState(false);
  const [data, setData] = React.useState<RegisterItem | undefined>();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<RegisterItem>();

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
      {emailData.map((item) => (
        <div key={item.id} className={s.content}>
          <div>
            <h2 className={s.title}>{item.title}</h2>
            <span className={s.span}>{item.text}</span>
          </div>
          <CheckBox
            {...register("status")}
            value={item.title}
            status={item.status}
            changeStatus={() => dispatch(changeEmailStatus(item.id))}
          />
        </div>
      ))}
      <Button>Save all</Button>
      {isVisible && <Modal data={data} onClose={handleToogleFn} />}
    </form>
  );
};

export default EmailList;
