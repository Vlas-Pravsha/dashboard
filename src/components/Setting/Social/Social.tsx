import React from "react";
import Button from "../Button/Button";
import s from "./Social.module.scss";
import Image from "next/image";

const socialData = [
  {
    id: 1,
    value: "GitHub account",
    img: "/Img/FooterImg/github.svg",
    link: "www.github.com/themesberg",
    status: true,
  },
  {
    id: 2,
    value: "Twitter account",
    img: "/Img/FooterImg/twitter.svg",
    link: "www.twitter.com/themesberg",
    status: true,
  },
  {
    id: 3,
    value: "LinkedIn account",
    img: "/Img/FooterImg/linkedIn-in.svg",
    link: "www.linkedin.com/themesberg",
    status: false,
  },
  {
    id: 4,
    value: "Facebook account",
    img: "/Img/FooterImg/facebook-f.svg",
    link: "www.facebook.com/themesberg",
    status: false,
  },
];

const Social = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.mainTitle}>Social accounts</h2>
      <div className={s.cartWrapper}>
        {socialData.map((item) => (
          <div key={item.id} className={s.cart}>
            <div className={s.content}>
              <Image
                src={item.img}
                alt={item.value}
                className={s.img}
                width="30"
                height="30"
              />
              <div className={s.textWrapper}>
                <div className={s.title}>{item.value}</div>
                {item.status ? (
                  <a href="/setting" className={s.link}>
                    {item.link}
                  </a>
                ) : (
                  <span className={s.spanLink}>Not connected</span>
                )}
              </div>
            </div>
            {item.status ? (
              <Button type="third">Connect</Button>
            ) : (
              <Button type="secondary">Disconnect</Button>
            )}
          </div>
        ))}
      </div>
      <Button>Save all</Button>
    </div>
  );
};

export default Social;
