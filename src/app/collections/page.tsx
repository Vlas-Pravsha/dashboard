"use client";
import React from "react";
import CollectionsList from "./CollectionsList/CollectionsList";
import Input from "./Input/Input";
import s from "./Collection.module.scss";

const categories = ["Все", "Море", "Горы", "Архитектура", "Города"];

const Collection = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [categoryId, setCategoryId] = React.useState(0);

  return (
    <div className={s.collectionWrap}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Collections</h1>
        {categories.map((item, index) => (
          <div
            key={index}
            className={`${index === categoryId ? s.active : s.category}`}
            onClick={() => setCategoryId(index)}
          >
            {item}
          </div>
        ))}
        <Input searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <CollectionsList
        searchValue={searchValue}
        categories={categories}
        categoryId={categoryId}
      />
    </div>
  );
};

export default Collection;
