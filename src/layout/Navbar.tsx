import clsx from 'clsx';
import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <nav className="  w-full  h-[98px] bg-custom-bg">
      <div className=" flex items-center justify-between w-[1220px]  gap-[313px]   h-[40px] ml-[110px] pt-[29px]">
        <div className="flex items-center justify-between w-[52.8px] h-[40px] ">
          <img src={logo} alt="" />
        </div>
        <div className=" w-[407px] h-[24px] pt-[10.5px] left-[406px] flex gap-[32px] ">
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

        <div className="flex items-center bg-custom-pink rounded-[100px] text-white w-[150px]  h-[34px] left-[1070px] pt-[2px] pr-[12px] pb-[2px] pl-[2px] ">
          <button
            className={clsx(`rounded-[100px] pt[4px] pr-[12px] pb-[4px] pl-[12px]  w-[76px] h-[30px] ${active ? 'bg-custom-orange' : 'text-black'}`)}
            onClick={() => setActive(true)}
          >
            mainnet
          </button>
          <button
            className={clsx(`rounded-[100px]  pt[4px] pr-[9px] pb-[4px] pl-[12px]  w-[76px] h-[30px] ${!active ? 'bg-custom-orange' : 'text-black'}`)}
            onClick={() => setActive(false)}
          >
            testnet
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;