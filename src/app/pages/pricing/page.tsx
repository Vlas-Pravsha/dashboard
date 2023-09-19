import SecondHeader from "@/components/Header/SecondHeader/SecondHeader";
import React from "react";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import s from "./Pricing.module.scss";
import Table from "./Table/Table";
const Pricing = () => {
  return (
    <div className={s.wrapper}>
      <SecondHeader />
      <div className={s.content}>
        <h2 className={s.title}>Our pricing plan made simple</h2>
        <p className={s.description}>
          All types of businesses need access to development resources, so we
          give you the option to decide how much you need to use.
        </p>
        <Cart />
        <Table />
        <div className={s.title}>Frequently asked questions</div>
        <p className={s.description}>
          All types of businesses need access to development resources, so we
          give you the option to decide how much you need to use.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;