import Image from "next/image";
import React from "react";
import Delete from "../../../assets/Img/UsersImg/delete.svg";
import Exit from "../../../assets/Img/UsersImg/exit.svg";
import Btn from "./Btn/Btn";
import s from "./ModalDelete.module.scss";

interface ModalDeleteProps {
  onClose: () => void;
}

const ModalDelete = ({ onClose }: ModalDeleteProps) => {
  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrapper}>
        <div className={s.exitWrapper}>
          <Image src={Exit} alt="Exit" className={s.exit} onClick={onClose} />
        </div>
        <div className={s.center}>
          <Image src={Delete} alt="Delete" className={s.delete} />
          <span className={s.text}>
            Are you sure you want to delete this user?
          </span>
          <div className={s.buttonWrapper}>
            <Btn>Yes, im sure</Btn>
            <div onClick={onClose}>
              <Btn type="secondary">No, cancel</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
