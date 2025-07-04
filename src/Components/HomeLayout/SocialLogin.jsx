import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Login With</h2>
      <div className="space-y-3 flex flex-col mt-5">
        <button className="btn w-full btn-secondary btn-outline">
          <FcGoogle size={25} />
          Login With Goggle
        </button>
        <button className="btn w-full btn-primary btn-outline">
          <FaGithub size={25} />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
