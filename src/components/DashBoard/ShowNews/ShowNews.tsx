"use client";
import React, { useState } from "react";
import s from "./ShowNews.module.scss";

type DataItem = {
  source: {
    name: string;
  };
  urlToImage: string;
  title: string;
  author: string;
};

interface ShowNewsProps {
  data: DataItem[];
}
const itemsPerPage = 15;

const ShowNews = ({ data }: ShowNewsProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const limitedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.mainTitle}>All News</h1>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.th}>Id</th>
            <th className={s.th}>Name</th>
            <th className={s.th}>Img</th>
            <th className={s.th}>Title</th>
            <th className={s.th}>Author</th>
          </tr>
        </thead>
        <tbody>
          {limitedData.map((item: DataItem, index: number) => {
            const { source, urlToImage, title, author } = item;
            return (
              <tr key={index} className={s.tr}>
                <td className={s.td}>{index + 1}</td>
                <td className={s.td}>{source.name}</td>
                <td className={s.td}>
                  <img
                    src={urlToImage}
                    alt={item.title}
                    className={s.urlToImage}
                  />
                </td>
                <td className={s.td}>{title}</td>
                <td className={s.td}>{author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={s.pagination}>
        <button
          className={s.button}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={s.span}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={s.button}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowNews;
