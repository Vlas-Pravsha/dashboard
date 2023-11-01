import Image from "next/image";
import React from "react";
import s from "./SmartChat.module.scss";
const Avatar1 = "/Img/UsersImg/neil-sims.png";
const Avatar2 = "/Img/UsersImg/jese-leos.png";
const Avatar3 = "/Img/UsersImg/lana-byrd.png";
const Avatar4 = "/Img/UsersImg/profile.png";
const Avatar5 = "/Img/UsersImg/andrey.png";
const Avatar6 = "/Img/UsersImg/thomas-lean.png";

const SmartChatData = [
  {
    id: 1,
    name: "Neil Sims",
    avatar: Avatar1,
    date: "01/03/2023 4:15 PM",
    biography:
      "Hello @designteam Let's schedule a kick-off meeting and workshop this week. It would be great to gather everyone involved in the design project. Let me know about your availability in the thread.Looking forward to it! Thanks.",
    replice: "4 replies",
  },
  {
    id: 2,
    name: "Neil Sims",
    avatar: Avatar2,
    date: "01/03/2023 4:15 PM",
    biography: `Hello everyone, Thank you for the workshop, it was a very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'm waiting for the offer and pitch deck from you. It would be great to get it by the end of the month. Cheers!`,

    replice: "4 replies",
  },
  {
    id: 3,
    name: "Michael Gough",
    avatar: Avatar3,
    email: "michael.gough@flowbite.com",
    biography:
      "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
    replice: "14 replies",
  },
  {
    id: 4,
    name: "Bonnie Green",
    avatar: Avatar5,
    date: "01/03/2023 4:15 PM",
    biography: (
      <>
        Ok <span className={s.link}>@team</span> I&rsquo;am attaching our offer
        and pitch deck. Take your time to review everything. I&rsquo;am looking
        forward to the next steps! Thank you. Looking forward to it! Thanks.
      </>
    ),
    position: "UI/UX Engineer",
    country: "Australia",
    status: "Offline",
  },
  {
    id: 5,
    name: "Jese Leos",
    avatar: Avatar4,
    date: "01/03/2023 4:15 PM",
    biography: (
      <>
        Hi <span className={s.link}>@jeseleos </span> I need some informations
        about flowbite react version.
      </>
    ),
  },
  {
    id: 6,
    name: "Thomas Lean",
    avatar: Avatar6,
    date: "01/03/2023 4:15 PM",
    biography: (
      <>
        Hi <span className={s.link}>@josephh</span> Sure, just let me know whean
        you are available and we can speak.
      </>
    ),
  },
];

const SmartChat = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>SmartChat</h2>
      <div className={s.content}>
        {SmartChatData.map((item) => {
          return (
            <div key={item.id} className={s.itemWrapper}>
              <div className={s.imgAndTextWrapper}>
                <Image
                  src={item.avatar}
                  alt="img"
                  width="30"
                  height="30"
                  className={s.imgCustomers}
                />
                <p className={s.name}>{item.name}</p>
                <p className={s.date}>{item.date}</p>
              </div>
              <p className={s.biography}>{item.biography}</p>
              {item.replice && <p className={s.replice}>{item.replice}</p>}
            </div>
          );
        })}
      </div>
      <div>
        <textarea
          className={s.textarea}
          placeholder="Reply in thread..."
          rows={1}
        ></textarea>
      </div>
      <div>
        <div className={s.thread}>Hide thread</div>
      </div>
      <div className={s.messageWrapper}>
        <div className={s.textareaWrapper}>
          <textarea
            className={s.messageTextarea}
            placeholder="Write your message"
            rows={8}
          ></textarea>
        </div>
        <div className={s.footerWrapper}>
          <button className={s.button}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default SmartChat;
