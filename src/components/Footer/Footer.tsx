import Image from "next/image";
import React from "react";
import s from "./Footer.module.scss";

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
    Img: "/Img/FooterImg/github.svg",
  },
  {
    id: 2,
    Img: "/Img/FooterImg/twitter.svg",
  },
  {
    id: 3,
    Img: "/Img/FooterImg/linkedIn-in.svg",
  },
  {
    id: 4,
    Img: "/Img/FooterImg/facebook-f.svg",
  },
  {
    id: 5,
    Img: "/Img/FooterImg/instagram.svg",
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
            <Image
              src={item.Img}
              alt="Img"
              className={s.img}
              width="30"
              height="30"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
