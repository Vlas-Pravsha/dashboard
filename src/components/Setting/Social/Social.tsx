import React from "react";
import Button from "../Button/Button";
import s from "./Social.module.scss";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { LiaFacebookF } from "react-icons/lia";

const socialData = [
  {
    id: 1,
    value: "GitHub account",
    img: <AiOutlineGithub className={s.img} />,
    link: "www.github.com/themesberg",
    status: true,
  },
  {
    id: 2,
    value: "Twitter account",
    img: <AiOutlineTwitter className={s.img} />,
    link: "www.twitter.com/themesberg",
    status: true,
  },
  {
    id: 3,
    value: "LinkedIn account",
    img: <AiFillLinkedin className={s.img} />,
    link: "www.linkedin.com/themesberg",
    status: false,
  },
  {
    id: 4,
    value: "Facebook account",
    img: <LiaFacebookF className={s.img} />,
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
              <span>{item.img}</span>
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
