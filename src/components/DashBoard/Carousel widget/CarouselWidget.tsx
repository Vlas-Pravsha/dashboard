import React from "react";
import Button from "../ActivityCard/Button/Button";
import TextLink from "../ActivityCard/TextLink/TextLink";
import s from "./CarouselWidget.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "./Header/Header";
import CarouselList from "./CarouselList/CarouselList";

type CarouselItem = {
  id: string;
  header: string;
  title?: string;
  text: string;
  listTitle?: string;
  list?: { id: string; text: string }[];
  link?: React.ReactNode;
  button?: React.ReactNode;
};

interface CarouselWidgetProps {
  CarouselData: CarouselItem[];
}

const CarouselWidget = ({ CarouselData }: CarouselWidgetProps) => {
  return (
    <div className={s.wrapper}>
      <Swiper spaceBetween={100} slidesPerView={1}>
        {CarouselData.map((item) => (
          <SwiperSlide key={item.id} className={s.itemWrapper}>
            <Header type={item.header}>
              <h2 className={s.header}>{item.header}</h2>
            </Header>
            {item.title && <h3 className={s.title}>{item.title}</h3>}
            <p className={s.text}>{item.text}</p>
            {item.listTitle && (
              <h3 className={s.listTitle}>{item.listTitle}</h3>
            )}
            {item.list && (
              <CarouselList list={item.list} type={item.header}></CarouselList>
            )}
            {item.link && <TextLink>{item.link}</TextLink>}
            {item.button && <Button>{item.button}</Button>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselWidget;
