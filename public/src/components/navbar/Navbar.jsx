import React from "react";
import AirBnbLogo from "../../svg/airbnb-logo";

const Navbar = () => {
  return <header className="w-full flex-col justify-center transition-all duration-300">
    <div className="flex items-center justify-between px-20">
      <div className="flex-grow basis-0">
        <div className="w-max cursor-pointer">
          <AirBnbLogo />
        </div>
      </div>
    </div>
  </header>;
};

export default Navbar;
