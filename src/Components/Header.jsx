import React from "react";

import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE ,MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
