import React, { useState } from 'react';
import { FiShoppingCart, FiInfo, FiHeadphones, FiMenu, FiX } from 'react-icons/fi';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg px-4 py-2 shadow-lg rounded-[35px] h-[90px]">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold">Createnary</span>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>
      <div className="hidden md:flex flex-grow mx-4">
        <input
          type="text"
          placeholder="Search Creators"
          className="w-full md:w-[290px] px-4 py-2 bg-gray-200 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button className="flex items-center space-x-2">
          <FiShoppingCart className="text-xl" />
          <span className="hidden md:inline">Cart</span>
        </button>
        <button className="flex items-center space-x-2">
          <FiInfo className="text-xl" />
          <span className="hidden md:inline">About</span>
        </button>
        <button className="flex items-center space-x-2">
          <FiHeadphones className="text-xl" />
          <span className="hidden md:inline">Contact</span>
        </button>
        <div className="relative">
        <button className="w-full h-full px-6 py-2.5 rounded-[15px] border border-[#11151D] flex justify-center items-center gap-2.5">
      <div className="text-center text-[#11151D] text-[18px] font-urbanist font-medium break-words">
        Login
      </div>
      <div className="relative w-5 h-5">
        <div className="absolute w-[13.75px] h-[7.5px] left-[3.12px] top-[6.87px] bg-[#11151D]"></div>
      </div>
    </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="flex items-center justify-between w-11/12">
              <span className="text-2xl font-bold">Createnary</span>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                <FiX className="text-xl" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search Creators"
              className="w-11/12 px-4 py-2 bg-gray-200 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="flex items-center space-x-2">
              <FiShoppingCart className="text-xl" />
              <span>Cart</span>
            </button>
            <button className="flex items-center space-x-2">
              <FiInfo className="text-xl" />
              <span>About</span>
            </button>
            <button className="flex items-center space-x-2">
              <FiHeadphones className="text-xl" />
              <span>Contact</span>
            </button>
            <button className="w-full h-full px-6 py-2.5 rounded-[15px] border border-[#11151D] flex justify-center items-center gap-2.5">
      <div className="text-center text-[#11151D] text-[18px] font-urbanist font-medium break-words">
        Login
      </div>
      <div className="relative w-5 h-5">
        <div className="absolute w-[13.75px] h-[7.5px] left-[3.12px] top-[6.87px] bg-[#11151D]"></div>
      </div>
    </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
