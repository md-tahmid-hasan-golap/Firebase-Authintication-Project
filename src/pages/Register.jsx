import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-center font-bold text-2xl">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input type="Text" className="input" placeholder="Name" />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="Text" className="input" placeholder="Photo URL" />

            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
        <p className="text-center">
          {" "}
          Already have an account ?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
