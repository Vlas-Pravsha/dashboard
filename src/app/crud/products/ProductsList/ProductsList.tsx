"use client";
import Image from "next/image";
import React from "react";
import Button from "@/app/crud/users/Button/Button";
import s from "./ProductsList.module.scss";
import Input from "@/app/crud/users/Input/Input";
import CheckBox from "@/app/crud/users/CheckBox/CheckBox";
import ModalDelete from "@/app/crud/users/ModalDelete/ModalDelete";

type ProductItem = {
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
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.th}>
              <CheckBox></CheckBox>
            </th>
            <th className={s.th}>PRODUCT NAME</th>
            <th className={s.th}>TECHNOLOGY</th>
            <th className={s.th}>DESCRIPTION</th>
            <th className={s.th}>ID</th>
            <th className={s.th}>PRICE</th>
            <th className={s.th}>DISCOUNT</th>
            <th className={s.th}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product: ProductItem) => {
            const {
              name,
              category,
              technology,
              id,
              description,
              price,
              discount,
            } = product;
            const slicedDescription = description.slice(0, 71);
            const slicedId = id.slice(0, 8);
            return (
              <tr key={id} className={s.tr}>
                <td className={s.td}>
                  <CheckBox></CheckBox>
                </td>
                <td className={s.td}>
                  <div className={s.imgTextWrapper}>
                    <div className={s.textWrapper}>
                      <div className={s.name}>{name}</div>
                      <span className={s.email}>{category}</span>
                    </div>
                  </div>
                </td>
                <td>{technology}</td>
                <td className={s.td}>
                  <span
                    className={s.biography}
                  >{`${slicedDescription}...`}</span>
                </td>
                <td className={s.td}>
                  <span className={s.position}>{slicedId}</span>
                </td>
                <td className={s.td}>
                  <span className={s.country}>{price}</span>
                </td>
                <td className={s.td}>{discount}</td>
                <td>
                  <div className={s.buttonWrapper}>
                    <Button type="default">Update</Button>
                    <Button type="secondary" onClick={toogleHandleClick}>
                      Delete item
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={s.paginationWrapper}>
        <div className={s.paginationTextWrapper}>
          <Image
            src={"/Img/UsersImg/chevron-left-solid.svg"}
            alt="Left"
            className={s.back}
            width="30"
            height="30"
          />
          <Image
            src={"/Img/UsersImg/chevron-right-solid.svg"}
            alt="Right"
            className={s.to}
            width="30"
            height="30"
          />
          <div className={s.text}>
            Showing <span className={s.span}>1-20 </span>of
            <span className={s.span}> 2290</span>
          </div>
        </div>
        <div className={s.buttonWrapper}>
          <Button type="previous">Previous</Button>
          <Button type="next">Next</Button>
        </div>
      </div>
      {isVisible && <ModalDelete onClose={toogleHandleClick}></ModalDelete>}
    </div>
  );
};
export default ProductsList;
