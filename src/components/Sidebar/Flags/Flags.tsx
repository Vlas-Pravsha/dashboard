"use client";
import { setFlagChangeValue, setFlagOpen } from "@/store/slices/Sidebar/SidebarSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import s from "./Flags.module.scss";

const Flags = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.flagOpen);
  const flagsArr = useSelector((state: RootState) => state.sidebar.flagsArr);
  const changeValue = useSelector(
    (state: RootState) => state.sidebar.changeValue
  );

  const toggle = () => dispatch(setFlagOpen(!isOpen));

  const handleFlagSelect = (src: string) => {
    dispatch(setFlagChangeValue(src));
    toggle();
  };
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {isOpen &&
          flagsArr.map((item) => (
            <div
              key={item.id}
              onClick={() => handleFlagSelect(item.src)}
              className={s.itemWrapper}
            >
              <Image
                height={25}
                width={25}
                src={item.src}
                alt={item.title}
                className={s.img}
              />
              <span className={s.text}>{item.title}</span>
            </div>
          ))}
      </div>
      <div className={s.choosedImg}>
        {changeValue ? (
          <Image
            onClick={toggle}
            height={25}
            width={25}
            src={changeValue}
            alt="Logo"
          />
        ) : (
          <Image
            onClick={toggle}
            height={25}
            width={25}
            src="/Img/SideBarImg/Flags/ua.svg"
            alt="Logo"
          />
        )}
      </div>
    </div>
  );
};

export default Flags;
