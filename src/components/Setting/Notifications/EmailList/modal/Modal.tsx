import Image from "next/image";
import s from "./Modal.module.scss";
import React from "react";
import Button from "./Button/Button";
import { BiSad } from "react-icons/bi";

interface ModalProps {
  data: any;
  onClose: () => void;
}

const Modal = ({ data, onClose }: ModalProps) => {
  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrapper}>
        <h2 className={s.title}>Your choise:</h2>
        <div className={s.line}></div>
        {data.status.length === 0 ? (
          <div className={s.items}>
            <p className={s.emptyTextWrapper}>
              Nothing selected <BiSad className={s.emptyIcon} />
            </p>
          </div>
        ) : (
          <div className={s.items}>
            <p className={s.itemText}> {data.status[0]}</p>
            <p className={s.itemText}> {data.status[1]}</p>
            <p className={s.itemText}> {data.status[2]}</p>
            <p className={s.itemText}> {data.status[3]}</p>
          </div>
        )}

        <div className={s.line}></div>

        <div className={s.buttonWrapper} onClick={onClose}>
          <Button>Yes, im sure</Button>
          <div onClick={onClose}>
            <Button type="secondary">No, cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
