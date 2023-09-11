"use client";
import React, { useEffect, useState } from "react";
import s from "./CollectionsList.module.scss";
import Collection from "../Collection/Collection";
import { getCollections } from "@/api/getCollections";
import Loading from "../Loading/Loading";

export interface CollectionItem {
  name: string;
  category?: number;
  photos: string[];
}

interface CollectionsListProps {
  searchValue: string;
  categoryId: number;
  categories: string[];
}

const CollectionsList: React.FC<CollectionsListProps> = ({
  searchValue,
  categoryId,
}: CollectionsListProps) => {
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [page, setPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const collectionData = await getCollections(categoryId, page);
        setCollections(collectionData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching collections:", error);
      }
    }, 800);
  }, [categoryId, page]);

  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      {loading ? (
        <div className={s.loadingWrap}>
          <Loading loading={loading} />
        </div>
      ) : (
        <div>
          <div className={s.mainWrapper}>
            {filteredCollections.map((item, index) => (
              <div key={index} className={s.collectionWrap}>
                <Collection name={item.name} photos={item.photos} />
              </div>
            ))}
          </div>
        </div>
      )}
      <ul className={s.pagination}>
        {loading
          ? null
          : [...Array(3)].map((_, index) => (
              <li
                key={index}
                className={`${index + 1 === page ? s.active : s.page}`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default CollectionsList;
