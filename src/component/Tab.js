import React, { useState } from "react";
import Button from "./Button";
import { BiSearch } from "react-icons/bi";
import DateMenu from "./DateMenu";
import WhereMenue from "./WhereMenue";
import WhoMenue from "./WhoMenue";
const Tab = () => {
  const [showWhereMenu, setShowWhereMenu] = useState(false);
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [showWhoMenu, setShowWhoMenu] = useState(false);
  return (
    <div className="mt-2 mb-2">
      <div className="flex justify-center items-center mt-4">
        <div className="border border-gray-300 rounded-full flex bg-white flex items-center">
          <div
            className="cursor-pointer hover:bg-[#EBEBEB] py-3 px-6 rounded-full w-64 text-start"
            onMouseEnter={() => setShowWhereMenu(true)}
            onMouseLeave={() => setShowWhereMenu(false)}
          >
            <div>Where</div>
            <div className="text-gray-500 text-xs">Search destinations</div>
          </div>
          <div className="w-1 border-r border-gray-200 h-[35px]"></div>
          <div
            className="cursor-pointer hover:bg-[#EBEBEB] py-3 px-6 rounded-full w-64 text-start"
            onMouseEnter={() => setShowDateMenu(true)}
            onMouseLeave={() => setShowDateMenu(false)}
          >
            <div>Date</div>
            <div className="text-gray-500 text-xs">Add Dates</div>
          </div>
          <div className="w-1 border-l border-gray-200 h-[35px]"></div>
          <div
            className="cursor-pointer hover:bg-[#EBEBEB] py-2 pl-6 pr-3 rounded-full flex items-center justify-between gap-2 w-64 text-start"
            onMouseEnter={() => setShowWhoMenu(true)}
            onMouseLeave={() => setShowWhoMenu(false)}
          >
            <div>
              <div>Who</div>
              <div className="text-gray-500 text-xs">Add guest</div>
            </div>
            <Button
              text={
                <div className="flex items-center gap-2 text-white font-semibold py-1 px-3">
                  <BiSearch className="text-white h-5 w-5 font-semibold" />
                  <span>Search</span>
                </div>
              }
              className="bg-[#FF385C] rounded-full p-2"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        {showWhereMenu && (
          <div className="absolute top-2 left-[190px] z-20">
            <WhereMenue />
          </div>
        )}
        {showDateMenu && (
          <div className="absolute top-2 left-1/4 z-20">
            <DateMenu />
          </div>
        )}
        {showWhoMenu && (
          <div className="absolute top-2 right-[190px] z-20">
            <WhoMenue />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
