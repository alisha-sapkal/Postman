import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={'w-full flex justify-center fixed top-0 z-30 bg-white'}>
      
      <div className="w-full h-15 max-w-3xl bg-gray-300 flex justify-between items-center pl-1 pr-6 py-3 my-2 rounded-full shadow-md border border-orange-300">
        <div className="flex items-center">
          <Link to="/">
          <img
            src={logo}
            alt="Logo"
              className="h-14  w-14 text-black object-contain border-white border-2 rounded-full"
          />
          </Link>
        </div>
        <div className="text-black flex gap-6 text-sm">
            <Link
              to="/"
            className={`font-extrabold cursor-pointer `}
            style={{
              color: 'black', fontWeight: "bold"
            }}
            >
              HOME
            </Link>
            <a
              href="/aboutus"
              className={`cursor-pointer font-extrabold`}
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              ABOUT
            </a>

            <Link
              to="/event"
            className={`cursor-pointer font-extrabold `}
            style={{
              color: 'black', fontWeight: "bold"
            }}
            >
              EVENT
            </Link>
            <Link
              to="/speakers"
            className={`cursor-pointer font-extrabold `}
            style={{
              color: 'black', fontWeight: "bold"
            }}
            >
              SPEAKERS
            </Link>
            <Link
              to="/team"
            className={`cursor-pointer font-extrabold `}
            style={{
              color: 'black', fontWeight: "bold"
            }}
            >
              TEAM
            </Link>
        </div>
        <Link to="/lastPage">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition">
            POSTMAN COMMUNITY DAY
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;