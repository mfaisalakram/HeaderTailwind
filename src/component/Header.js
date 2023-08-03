import React from "react";
import mainImage from "../assets/main.png";
const Header = () => {
  return (
    <header className="p-4 flex items-center justify-between border-b">
      <img src={mainImage} alt="Logo" className="w-70 h-8 mr-4" />
      <input
        type="text"
        placeholder="Search"
        className="bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <button className="text-white p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
