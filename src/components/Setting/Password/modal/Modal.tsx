import Image from "next/image";
import s from "./Modal.module.scss";
import React from "react";
import Button from "./Button/Button";
import { spawn } from "child_process";

interface ModalProps {
  data: any;
  onClose: () => void;
}

type DataItem = {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: any;
};

const Modal = ({ data, onClose }: ModalProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  function showPasswords(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsVisible(!isVisible);
  }

  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrapper}>
        <h2 className={s.title}>Your passwords information:</h2>
        <div className={s.line}></div>
        <div className={s.items}>
          <p className={s.itemTextWrapper}>
            Confirm:
            {isVisible === false ? (
              <span>********</span>
            ) : (
              <span className={s.itemText}>{data.Confirm}</span>
            )}
          </p>
          <p className={s.itemTextWrapper}>
            Current:
            {isVisible === false ? (
              <span> ********</span>
            ) : (
              <span className={s.itemText}>{data.Current}</span>
            )}
          </p>
          <p className={s.itemTextWrapper}>
            New:
            {isVisible === false ? (
              <span> ********</span>
            ) : (
              <span className={s.itemText}>{data.New}</span>
            )}
          </p>
        </div>
        <div className={s.line}></div>
        <div className={s.buttonWrapper}>
          <div onClick={onClose}>
            <Button>I&apos;m sure</Button>
          </div>
          <Button type="secondary" onClick={(event) => showPasswords(event)}>
            Show paswords
          </Button>
          <div onClick={onClose}>
            <Button type="third">No, cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
