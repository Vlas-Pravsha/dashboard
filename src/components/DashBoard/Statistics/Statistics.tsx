import React, { useMemo } from "react";
import Button from "./Button/Button";
import ShowArray from "./ShowArray/ShowArray";
import s from "./Statistics.module.scss";
import { FiChevronDown } from "react-icons/fi";
interface Props {
  itemList: ItemType[];
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}
interface ItemType {
  title: string;
  arr: DataType[];
  id: string;
  // type: "button" | "secondary";
  type: any;
  buttonText: string;
}

export interface DataType {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const Statistics = ({ itemList, activeItem, setActiveItem }: Props) => {
  const list = useMemo(
    () => itemList.find((el) => el.title === activeItem)?.arr || [],
    [itemList, activeItem]
  );

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Statistics this month</h2>
      <div>
        {itemList.map((item) => (
          <Button
            key={item.id}
            type={item.type}
            onClick={() => setActiveItem(item.title)}
          >
            {item.buttonText}
          </Button>
        ))}
      </div>
      <div className={s.content}>
        <ShowArray list={list} />
        <div className={s.footerWrapper}>
          <div className={s.lastTextWrapper}>
            <span className={s.lastText}>Last 7 days</span>
            <FiChevronDown className={s.chevronDown} />
          </div>
          <span className={s.fullReportText}>FULL REPORT</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
