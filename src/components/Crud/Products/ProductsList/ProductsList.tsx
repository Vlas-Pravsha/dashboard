"use client";
import React from "react";
import Input from "../../Users/Input/Input";
import ModalDelete from "../../Users/ModalDelete/ModalDelete";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
import s from "./ProductsList.module.scss";

export type ProductItem = {
  id: string;
  name: string;
  category: string;
  technology: string;
  description: string;
  price: string;
  discount: string;
};

interface ProductListProps {
  productsData: ProductItem[];
}

const ProductsList = ({ productsData }: ProductListProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  function toogleHandleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.mainTitle}>All products</h2>
      <Input placeholder="Search for users" />
      <Table
        productsData={productsData}
        toogleHandleClick={toogleHandleClick}
      />
      <Pagination />
      {isVisible && <ModalDelete onClose={toogleHandleClick}></ModalDelete>}
    </div>
  );
};
export default ProductsList;
