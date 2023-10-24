import {
  changeAlertsStatus,
  changeEmailStatus,
} from "@/store/slices/Settings/SettingsSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import CheckBox from "./CheckBox/CheckBox";
import s from "./Notifications.module.scss";

const Notifications = () => {
  
  const emailData = useSelector((state: RootState) => state.settings.emailData);
  const alertsData = useSelector(
    (state: RootState) => state.settings.alertsData
  );
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.cart}>
        <div className={s.test}>
          <h2 className={s.title}>Alerts & Notifications</h2>
          <span className={s.span}>
            You can set up Themesberg to get notifications
          </span>
        </div>
        {alertsData.map((item) => {
          return (
            <div key={item.id} className={s.content}>
              <div className={s.q}>
                <h2 className={s.title}>{item.title}</h2>
                <span className={s.span}>{item.text}</span>
              </div>
              <CheckBox
                status={item.status}
                changeStatus={() => dispatch(changeAlertsStatus(item.id))}
              />
            </div>
          );
        })}
        <Button>Save all</Button>
      </div>
      <div className={s.cart}>
        <div className={s.test}>
          <h2 className={s.title}>Email Notifications</h2>
          <span className={s.span}>
            You can set up Themesberg to get email notifications
          </span>
        </div>
        {emailData.map((item) => (
          <div key={item.id} className={s.content}>
            <div className={s.q}>
              <h2 className={s.title}>{item.title}</h2>
              <span className={s.span}>{item.text}</span>
            </div>
            <CheckBox
              status={item.status}
              changeStatus={() => dispatch(changeEmailStatus(item.id))}
            />
          </div>
        ))}
        <Button>Save all</Button>
      </div>
    </div>
  );
};

export default Notifications;
