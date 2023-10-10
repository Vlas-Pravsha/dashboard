import React from "react";
import s from "./Table.module.scss";
import CheckBox from "../../Users/CheckBox/CheckBox";
import Button from "../../Users/Button/Button";
import { ProductItem } from "../ProductsList/ProductsList";

interface TableProps {
  productsData: ProductItem[];
  toogleHandleClick: () => void;
}

const Table = ({ productsData, toogleHandleClick }: TableProps) => {
  return (
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
                <span className={s.biography}>{`${slicedDescription}...`}</span>
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
  );
};

export default Table;
