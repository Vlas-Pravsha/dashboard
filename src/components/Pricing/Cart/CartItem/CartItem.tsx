import React from "react";
import s from "./CartItem.module.scss";
import { MdOutlineDone } from "react-icons/md";
import Button from "../Button/Button";

interface CartItemProps {
  item: Item;
}

export type Item = {
  id: string;
  title: string;
  description: string;
  price: string;
  options: Option[];
};

type Option = {
  id: string;
  text: string;
};
const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className={s.cart}>
      <h2 className={s.title}>{item.title}</h2>
      <p className={s.description}>{item.description}</p>
      <div className={s.price}>
        {`${item.price} `} <span className={s.month}>/month</span>
      </div>
      <div className={s.options}>
        {item.options.map((option) => (
          <div className={s.option} key={option.id}>
            <MdOutlineDone className={s.icon} />
            <span className={s.optionText}>{option.text}</span>
          </div>
        ))}
      </div>
      <Button>Get started</Button>
    </div>
  );
};

export default CartItem;
