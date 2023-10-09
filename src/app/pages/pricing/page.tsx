import SecondHeader from "@/components/Header/SecondHeader/SecondHeader";
import Cart from "@/components/Pricing/Cart/Cart";
import Footer from "@/components/Pricing/Footer/Footer";
import Questions from "@/components/Pricing/Qustions/Questions";
import Table from "@/components/Pricing/Table/Table";
import React from "react";
import s from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <div className={s.wrapper}>
      <SecondHeader />
      <div className={s.container}>
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
        <Questions />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
