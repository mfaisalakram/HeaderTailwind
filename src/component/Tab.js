import React from "react";

const Tab = () => {
  return (
    <>
      <div className="flex justify-center items-center border-b border-gray-400">
        <div className="p-4 cursor-pointer border-b-2 border-transparent hover:border-black">
          Stays
        </div>
        <div className="p-4 cursor-pointer border-b-2 border-transparent hover:border-black border-black">
          Experiences
        </div>
        <div className="p-4 cursor-pointer border-b-2 border-transparent hover:border-black">
          Online Experiences
        </div>
      </div>
      {/* // */}
      {/* <div className="flex items-center justify-center h-48 bg-gray-100 rounded-full"> */}
      <div className="flex items-center justify-center h-18 w-13 border border-gray-300 rounded-full">
        <button className="px-4 py-2 border-r border-gray-300">Date</button>
        <button className="px-4 py-2 border-r border-gray-300">Who</button>
        <button className="px-4 py-2">Search destinations</button>
      </div>
      {/* </div> */}
    </>
  );
};

export default Tab;
