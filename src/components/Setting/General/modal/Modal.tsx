import Image from "next/image";
import s from "./Modal.module.scss";
import React from "react";
import Button from "./Button/Button";

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
  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrapper}>
        <h2 className={s.title}>Your general information:</h2>
        <div className={s.line}></div>
        <div className={s.items}>
          <p>
            Name: <span className={s.itemText}>{data.Name}</span>
          </p>
          <p>
            Sername: <span className={s.itemText}>{data.Sername}</span>
          </p>
          <p>
            Country: <span className={s.itemText}>{data.Country}</span>
          </p>
          <p>
            City: <span className={s.itemText}>{data.City}</span>
          </p>
          <p>
            Address: <span className={s.itemText}>{data.Address}</span>
          </p>
          <p>
            Email: <span className={s.itemText}>{data.Email}</span>
          </p>
          <p>
            Number: <span className={s.itemText}>{data.Number}</span>
          </p>
          <p>
            Birthday: <span className={s.itemText}>{data.Birthday}</span>
          </p>
          <p>
            Organization:{" "}
            <span className={s.itemText}>{data.Organization}</span>
          </p>
          <p>
            Role: <span className={s.itemText}>{data.Role}</span>
          </p>
          <p>
            Department: <span className={s.itemText}>{data.Department}</span>
          </p>
          <p>
            Code: <span className={s.itemText}>{data.Code}</span>
          </p>
        </div>
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
