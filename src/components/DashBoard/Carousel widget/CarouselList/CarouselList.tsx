import React from "react";
import s from "./CarouselList.module.scss";
import { HiCheck } from "react-icons/hi";
import CheckBox from "../CheckBox/CheckBox";

interface CarouselListProps {
  list: ListItem[];
  type: string;
}

type ListItem = {
  id: string;
  text: string;
};

const CarouselList = ({ list, type }: CarouselListProps) => {
  return (
    <>
      {type === "Insights" && (
        <ul className={s.list}>
          {list.map((listItem: ListItem) => (
            <li key={listItem.id} className={s.item}>
              {listItem.text}
            </li>
          ))}
        </ul>
      )}
      {type === "Tips to grow" && (
        <ul className={s.listGrow}>
          {list.map((listItem: ListItem) => (
            <li key={listItem.id} className={s.item}>
              <div className={s.svgWrapper}>
                <HiCheck className={s.svg} />
                <p>{listItem.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {type === "Features" && (
        <ul className={s.listFeatures}>
          {list.map((listItem: ListItem) => (
            <li key={listItem.id} className={s.item}>
              <div className={s.svgWrapper}>
                <CheckBox />
                <p>{listItem.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CarouselList;
