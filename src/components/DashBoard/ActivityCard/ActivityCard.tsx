import React from "react";
import s from "./ActivityCard.module.scss";
import Button from "./Button/Button";
import TextLink from "./TextLink/TextLink";

interface ActivityCardProps {
  ActivityCardData: CardItem[];
}

interface CardItem {
  id: string;
  date: string;
  title: string;
  text: string;
  link?: React.ReactNode;
  button?: React.ReactNode;
}

const ActivityCard = ({ ActivityCardData }: ActivityCardProps) => {
  return (
    <section className={s.wrapper}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>Latest Activity</h2>
        <a href="/" className={s.titleLink}>Viev all</a>
      </div>
      <div className={s.content}>
        {ActivityCardData.map((item) => (
          <div key={item.id} className={s.itemWrapper}>
            <p className={s.date}>{item.date}</p>
            <span className={s.dote}></span>
            <h3 className={s.itemTitle}>{item.title}</h3>
            <p className={s.text}>{item.text}</p>
            {item.link && <TextLink>{item.link}</TextLink>}
            {item.button && <Button>{item.button}</Button>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityCard;
