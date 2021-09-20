import React from "react";
import Lottie from "lottie-react";
import data from "../../data.json";

const Lotties = () => {
  const defaultOptions = {
    path: "../../data.json",
    loop: true,
    autoPlay: true,
    animationData: Lottie,
  };
  return <Lottie options={defaultOptions} animationData={data} />;
};

export default Lotties;
