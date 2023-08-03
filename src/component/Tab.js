import React from "react";

const Tab = () => {
  return (
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
  );
};

export default Tab;
