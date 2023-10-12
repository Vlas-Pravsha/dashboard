import React from "react";
import { DataType } from "../Statistics";
import s from "./ShowArray.module.scss";

interface ListProps {
  list: DataType[];
}

const ShowArray = ({ list }: ListProps) => {
  return (
    <>
      {list.map((item: DataType, i: number) => {
        const { name, imageUrl, description, price } = item;
        return (
          <div key={i} className={s.itemWrapper}>
            <div className={s.coinAndTextWrapper}>
              <img
                src={imageUrl}
                alt="img"
                width="35"
                height="35"
                className={s.imgCustomers}
              />
              <div className={s.itemTextWrapper}>
                <span>{name}</span>
                <span className={s.email}>{description}</span>
              </div>
            </div>
            <span>${price}</span>
          </div>
        );
      })}
    </>
  );
};

export default ShowArray;
