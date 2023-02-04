import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-[#00425A] text-white py-2 items-center">
      <div className="flex justify-between w-4/6">
        <div className="flex">
          <h1>BTCA</h1>
        </div>

        <div className="flex gap-7 text-xs items-center">
          <Link to="/">
            <h1>Home</h1>
          </Link>

          <Link to="coach">
            <h1>Coaches</h1>
          </Link>
          <h1>Gallery</h1>

          <h1>Student Corner</h1>
          <h1>About Us</h1>
          <Link to="/contactus">
            <h1>Contact Us</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
