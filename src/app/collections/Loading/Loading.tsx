import React from "react";
import s from "./Loading.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

interface LoadingProps {
  loading: boolean;
}
const Loading = ({ loading }: LoadingProps) => {
  return (
    <>
      <span className={s.loadingText}>Loading...</span>
      <ClipLoader color={"#36d7b7"} loading={loading} size={40} />
    </>
  );
};

export default Loading;
