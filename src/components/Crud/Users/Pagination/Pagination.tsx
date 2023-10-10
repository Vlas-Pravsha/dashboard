import React from "react";
import s from "./Pagination.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../Button/Button";

const Pagination = () => {
  return (
    <div className={s.paginationWrapper}>
      <div className={s.paginationTextWrapper}>
        <FaChevronLeft className={s.back} />
        <FaChevronRight className={s.to} />
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
  );
};

export default Pagination;
