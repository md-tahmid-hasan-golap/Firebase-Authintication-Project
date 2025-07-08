import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/FirebaseAuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("you logged out ");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="max-w-11/12 mx-auto flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="login_btn flex items-center gap-5">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
