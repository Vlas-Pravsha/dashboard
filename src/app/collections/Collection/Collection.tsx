"use client";
import React from "react";
import s from "./Collection.module.scss";
import { CollectionItem } from "../CollectionsList/CollectionsList";

interface Collection {
  name: string;
  photos: string[];
}
function Collection({ name, photos }: Collection) {
  const [mainImgUrl, setMainImgUrl] = React.useState(photos[0]);

  return (
    <div className={s.collection}>
      <div className={s.imgWrap}>
        <img src={mainImgUrl} alt="Main Item" className={s.mainImg} />
      </div>
      <div className={s.imgWrap}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt="Item"
            className={s.img}
            onClick={() => setMainImgUrl(photo)}
          />
        ))}
      </div>
      <h4 className={s.title}>{name}</h4>
    </div>
  );
}

export default Collection;
