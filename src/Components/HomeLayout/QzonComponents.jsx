import React from "react";

import Swomming from "../../assets/swimming.png";
import ClassImg from "../../assets/class.png";
import playGround from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";
const QzonComponents = () => {
  return (
    <div>
      <h2 className="font-bold mt-7">Q-Zone</h2>
      <div className="flex flex-col">
        <img src={Swomming} alt="" />
        <img src={ClassImg} alt="" />
        <img src={playGround} alt="" />
        <img src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default QzonComponents;
