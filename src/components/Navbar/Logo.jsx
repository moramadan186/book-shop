import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center font-bold ml-12 sm:ml-0 text-gray-400">
      <Link to={"/"}>Booksy</Link>
    </div>
  );
};

export default Logo;
