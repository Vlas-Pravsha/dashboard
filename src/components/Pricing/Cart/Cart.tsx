import Image from "next/image";
import React from "react";
import s from "./Cart.module.scss";
import CartItem, { Item } from "./CartItem/CartItem";

interface CartProps {
  cartData: Item[];
}
const Cart = ({ cartData }: CartProps) => {
  return (
    <div className={s.wrapper}>
      {cartData.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Cart;
