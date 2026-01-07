import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="sm:px-20 py-17.5 bg-white">
      <div className="flex items-center justify-center gap-2">
        <img className="h-8" src="logo.png" alt="" />
        <h1 className="font-primary font-extrabold text-[20px]">DocTalk</h1>
      </div>
      <div className="flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li className="font-primary font-medium opacity-60">
            <Link to='/'>
              <button>
                Home
              </button>
            </Link>
          </li>
          <li className="font-primary font-medium opacity-60">
            <Link to="/my-bookings">
              <button>My-Bookings</button>
            </Link>
          </li>
          <li className="font-primary font-medium opacity-60">
            <Link to="/blogs">
              <button>Blogs</button>
            </Link>
          </li>
          <li className="font-primary font-medium opacity-60">
            <Link to="/contact-us">
              <button>Contact Us</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="border mb-4 border-dashed border-[rgba(15,15,15,0.2)]"></div>
      <div className="flex justify-center gap-5">
        <img className="h-7" src="fb.png" alt="" />
        <img className="h-7" src="twitter.png" alt="" />
        <img className="h-7" src="linkedin.png" alt="" />
        <img className="h-7" src="yt.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
