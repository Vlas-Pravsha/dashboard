import Image from "next/image";
import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { v1 } from "uuid";
import Button from "./Button/Button";
import s from "./Cart.module.scss";

const cartData = [
  {
    id: v1(),
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    options: [
      { id: v1(), text: "Individual configuration" },
      { id: v1(), text: "No setup, or hidden fees" },
      { id: v1(), text: "Team size: 1 developer" },
      { id: v1(), text: "Premium support: 6 months" },
      { id: v1(), text: "Free updates: 6 months" },
    ],
  },
  {
    id: v1(),
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    options: [
      { id: v1(), text: "Individual configuration" },
      { id: v1(), text: "No setup, or hidden fees" },
      { id: v1(), text: "Team size: 10 developers" },
      { id: v1(), text: "Premium support: 24 months" },
      { id: v1(), text: "Free updates: 24 months" },
    ],
  },
  {
    id: v1(),
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    options: [
      { id: v1(), text: "Individual configuration" },
      { id: v1(), text: "No setup, or hidden fees" },
      { id: v1(), text: "Team size: 100+ developers" },
      { id: v1(), text: "Premium support: 36 months" },
      { id: v1(), text: "Free updates: 36 months" },
    ],
  },
];
const Cart = () => {
  return (
    <div className={s.wrapper}>
      {cartData.map((item) => (
        <div className={s.cart} key={item.id}>
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
      ))}
    </div>
  );
};

export default Cart;
