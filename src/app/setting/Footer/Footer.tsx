import Image from "next/image";
import React from "react";
import s from "./Footer.module.scss";
import GitHub from "../../../assets/Img/FooterImg/github.svg";
import Twitter from "../../../assets/Img/FooterImg/twitter.svg";
import LinkedIn from "../../../assets/Img/FooterImg/linkedIn-in.svg";
import Facebook from "../../../assets/Img/FooterImg/facebook-f.svg";
import Instagram from "../../../assets/Img/FooterImg/instagram.svg";

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
    Img: GitHub,
  },
  {
    id: 2,
    Img: Twitter,
  },
  {
    id: 3,
    Img: LinkedIn,
  },
  {
    id: 4,
    Img: Facebook,
  },
  {
    id: 5,
    Img: Instagram,
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
            <Image src={item.Img} alt="Img" className={s.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
