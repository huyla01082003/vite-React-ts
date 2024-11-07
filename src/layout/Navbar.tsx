import clsx from 'clsx';
import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import { Color } from 'antd/es/color-picker';
import icon from "../assets/chevron-down.svg"
const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-primary">Tapos</a>
          <a href="#" className="text-gray-700 hover:text-primary">Wallet</a>
          <a href="#" className="text-gray-700 hover:text-primary">Leaderboard</a>
          <a href="#" className="text-gray-700 hover:text-primary">Shop</a>
          <div className="relative">
            <button
              className="text-orange-600 flex items-center hover:text-primary" 
              onClick={() => setShowMore(!showMore)}
            >
              More
              <img src={icon} alt="" />
            </button>
            {showMore && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 3</a>
              </div>
            )}
          </div>
          </div>
          
  <div className="flex items-center bg-red-300 rounded-xl">
  <button
    className={clsx(  `rounded-xl p-1 cursor-pointer ${active ? 'bg-orange-700' : 'text-white'}`)}
    onClick={() => setActive(true)}
  >
    mainnet
  </button>
  <button
    className={clsx( `rounded-xl p-1 cursor-pointer ${!active ? 'bg-orange-700' : 'text-white'}`)}
    onClick={() => setActive(false)}
  >
    testnet
  </button>
</div>
      </div>
    </nav>
  );
};

export default Navbar;