import React from "react";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

const FindUp = () => {
  return (
    <div>
      <h2 className="font-bold mt-7 mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item btn-outline p-7">
          {" "}
          <FaFacebookF size={25} />
          Facebook
        </button>
        <button className="btn join-item btn-outline p-7">
          <CiTwitter size={25} />
          Twitter
        </button>
        <button className="btn join-item btn-outline p-7">
          {" "}
          <CiInstagram size={25} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUp;
