import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="max-w-11/12 mx-auto flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="login_btn flex items-center gap-5">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
