import React from "react";
import s from "./ShowArray.module.scss";
import Image from "next/image";
import { DataType } from "../../DashBoard";

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
              <Image
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
