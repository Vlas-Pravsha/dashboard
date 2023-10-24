"use client";
import Accounts from "@/components/Setting/Accounts/Accounts";
import General from "@/components/Setting/General/General";
import Profile from "@/components/Setting/Profile/Profile";
import Social from "@/components/Setting/Social/Social";
import Time from "@/components/Setting/Time/Time";
import s from "./Setting.module.scss";
import Password from "../../components/Setting/Password/Password";
import Sessions from "@/components/Setting/Sessions/Sessions";
import Notifications from "@/components/Setting/Notifications/Notifications";
import Footer from "@/components/Footer/Footer";
import Select from "@/components/Setting/CustomSelect/Select";

// const Setting = () => {
//   return (
//     <div className={s.mainWrapper}>
//       <div className={s.wrapper}>
//         <h2 className={s.title}>User settings</h2>
//         <div className={s.contentWrapper}>
//           <div className={s.item1}>
//             <Profile></Profile>
//           </div>
//           <div className={s.item2}>
//             <General></General>
//           </div>
//           <div className={s.item3}>
//             <Time></Time>
//           </div>
//           <div className={s.item4}>
//             <Social></Social>
//           </div>
//           <div className={s.item5}>
//             <Password></Password>
//           </div>
//           <div className={s.item6}>
//             <Accounts></Accounts>
//           </div>
//           <div className={s.item7}>
//             <Sessions></Sessions>
//           </div>
//         </div>
//         <Notifications></Notifications>
//         <Footer></Footer>
//         <div className={s.footerText}>
//           © 2023 Dashboard.com. My Best Project.
//         </div>
//       </div>
//     </div>
//   );
// };

const Setting = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.wrapper}>
        <h2 className={s.title}>User settings</h2>
        <div className={s.contentWrapper}>
          <div className={s.q}>
            <Profile></Profile>
            <Time></Time>
            <Social></Social>
            <Accounts></Accounts>
          </div>
          <div className={s.p}>
            <General></General>
            <Password></Password>
            <Sessions></Sessions>
          </div>
        </div>
      </div>
      <Notifications></Notifications>
      <Footer></Footer>
      <div className={s.footerText}>© 2023 Dashboard.com. My Best Project.</div>
    </div>
  );
};
export default Setting;

// .mainWrapper {
//   padding: 20px;
// }
// .contentWrapper {
//   display: flex;
//   width: 100%;
//   gap: 15px;
// }
// .title {
//   font-size: 22px;
//   font-weight: 600;
//   margin-bottom: 25px;
// }
// .q {
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// }
// .footerText {
//   font-size: 14px;
//   color: var(--ligth-text-color);
//   text-align: center;
//   margin: 30px 0;
// }
// .p {
//   display: flex;
//   gap: 15px;
//   flex-direction: column;
//   width: 100%;
// }
// @media (max-width: 1280px) {
//   .contentWrapper {
//     flex-direction: column;
//   }
//   .q {
//     flex-direction: column;
//   }
//   .p {
//     flex-direction: column;
//   }
// }
