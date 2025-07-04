import React from "react";
import Marquee from "react-fast-marquee";

const LetestsNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-300 p-3 rounded-md">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded-md">Latest</p>

      <Marquee
        className="flex gap-5 items-center"
        speed={100}
        pauseOnHover={true}
      >
        <p className="font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
          consequatur!
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
          consequatur!
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
          consequatur!
        </p>
      </Marquee>
    </div>
  );
};

export default LetestsNews;
