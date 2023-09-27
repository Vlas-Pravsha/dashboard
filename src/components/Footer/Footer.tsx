import Image from "next/image";
import React from "react";
import s from "./Footer.module.scss";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

const footerData = [
  { id: 1, value: "Terms and conditions" },
  { id: 2, value: "Privacy Policy" },
  { id: 3, value: "Licensing" },
  { id: 4, value: "Cookie Policy" },
  { id: 5, value: "Contact" },
];
const footerDataImg = [
  {
    id: 1,
    Img: <BsGithub className={s.img} />,
  },
  {
    id: 2,
    Img: <BsTwitter className={s.img} />,
  },
  {
    id: 3,
    Img: <BsLinkedin className={s.img} />,
  },
  {
    id: 4,
    Img: <BsFacebook className={s.img} />,
  },
  {
    id: 5,
    Img: <BsInstagram className={s.img} />,
  },
];

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.textWrapper}>
        {footerData.map((item) => (
          <div className={s.item} key={item.id}>
            <div className={s.value}>{item.value}</div>
          </div>
        ))}
      </div>
      <div className={s.imgWrapper}>
        {footerDataImg.map((item) => (
          <div key={item.id}>
            <span>{item.Img}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
