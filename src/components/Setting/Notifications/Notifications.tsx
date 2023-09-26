import React from "react";
import Button from "../Button/Button";
import CheckBox from "./CheckBox/CheckBox";
import s from "./Notifications.module.scss";

const alertsData = [
  {
    id: 1,
    title: "Company News",
    text: "Get Themesberg news, announcements, and product updates",
    status: false,
  },
  {
    id: 2,
    title: "Account Activity",
    status: true,
    text: "Get important notifications about you or activity you've missed",
  },
  {
    id: 3,
    title: "Meetups Near You",
    status: true,
    text: "Get an email when a Dribbble Meetup is posted close to my location",
  },
  {
    id: 4,
    title: "New Messages",
    status: false,
    text: "Get Themsberg news, announcements, and product updates",
  },
];
const emailData = [
  {
    id: 1,
    title: "Rating reminders",
    status: false,
    text: "Send an email reminding me to rate an item a week after purchase",
  },
  {
    id: 2,
    title: "Item update notifications",
    status: true,
    text: "Send user and product notifications for you",
  },
  {
    id: 3,
    title: "Item comment notifications",
    status: true,
    text: "Send me an email when someone comments on one of my items",
  },
  {
    id: 4,
    title: "Buyer review notifications",
    status: false,
    text: "Send me an email when someone leaves a review with their rating",
  },
];

const Notifications = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.cart}>
        <div>
          <h2 className={s.title}>Alerts & Notifications</h2>
          <span className={s.span}>
            You can set up Themesberg to get notifications
          </span>
        </div>
        {alertsData.map((item) => (
          <div key={item.id} className={s.content}>
            <div className={s.q}>
              <h2 className={s.title}>{item.title}</h2>
              <span className={s.span}>{item.text}</span>
            </div>
            {item.status ? (
              <CheckBox status={item.status}></CheckBox>
            ) : (
              <CheckBox status={item.status}></CheckBox>
            )}
          </div>
        ))}
        <Button>Save all</Button>
      </div>
      <div className={s.cart}>
        <div>
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
            {item.status ? (
              <CheckBox status={item.status}></CheckBox>
            ) : (
              <CheckBox status={item.status}></CheckBox>
            )}
          </div>
        ))}
        <Button>Save all</Button>
      </div>
    </div>
  );
};

export default Notifications;