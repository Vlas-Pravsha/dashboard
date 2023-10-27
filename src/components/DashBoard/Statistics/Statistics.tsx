import React, { useMemo } from "react";
import Button from "./Button/Button";
import ShowArray from "./ShowArray/ShowArray";
import s from "./Statistics.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeActiveItem } from "@/store/slices/Dashboard/DashboardSlice";
import { RootState } from "@/store/store";
import { ItemType } from "../DashBoard";

interface Props {
  itemList: ItemType[];
}

const Statistics = ({ itemList }: Props) => {
  const activeItem = useSelector(
    (state: RootState) => state.dashboard.activeItem
  );
  const dispatch = useDispatch();

  const list = useMemo(
    () => itemList.find((el) => el.title === activeItem)?.arr || [],
    [itemList, activeItem]
  );

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Statistics this month</h2>
      <div className={s.buttonsWrapper}>
        {itemList.map((item) => (
          <Button
            key={item.id}
            type={item.type}
            onClick={() => dispatch(changeActiveItem(item.title))}
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
