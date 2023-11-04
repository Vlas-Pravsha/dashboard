import Image from "next/image";
import s from "./Accounts.module.scss";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Accounts = () => {
  const usersData = useSelector((state: RootState) => state.settings.usersData);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Other accounts</h2>
      <div className={s.content}>
        {usersData.map((user) => {
          return (
            <div key={user.id} className={s.cart}>
              <div className={s.avatarWrapper}>
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className={s.avatar}
                  height={50}
                  width={50}
                />
                <div className={s.textWrapper}>
                  <div className={s.name}>{user.name}</div>
                  <span className={s.country}>{user.country}</span>
                  <span className={s.visited}>{user.visited}</span>
                </div>
              </div>
              {user.status ? (
                <Button type="third">Connect</Button>
              ) : (
                <Button type="secondary">Disconnect</Button>
              )}
            </div>
          );
        })}
      </div>
      <Button>Save all</Button>
    </div>
  );
};

export default Accounts;
