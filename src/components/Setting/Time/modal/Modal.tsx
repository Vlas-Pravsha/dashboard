import Image from "next/image";
import s from "./Modal.module.scss";
import React from "react";
import Button from "./Button/Button";
import { RegisterItem } from "../Time";

interface ModalProps {
  data: RegisterItem | undefined;
  onClose: () => void;
}
const Modal = ({ data, onClose }: ModalProps) => {
  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrapper}>
        <h2 className={s.title}>Your choise:</h2>
        <div className={s.line}></div>
        <div className={s.items}>
          <p>Select language: {data?.Language}</p>
          <p>Time Zone: {data?.Time}</p>
        </div>
        <div className={s.line}></div>
        <div className={s.buttonWrapper}>
          <div onClick={onClose}>
            <Button>I&apos;m sure</Button>
          </div>
          <div onClick={onClose}>
            <Button type="third">No, cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
