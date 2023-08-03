import React from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
const WhoMenue = () => {
  const list = [
    { age: "Adult", ref: "Ages 13 or above" },
    { age: "Children", ref: "Ages 2-12" },
    { age: "Infants", ref: "Under 2" },
  ];
  return (
    <div
      className="flex flex-col justify-center p-7 shadow-md border border-gray-300 rounded-lg bg-white w-[400px] border-b"
      style={{ borderRadius: "30px" }}
    >
      {list.map((item) => {
        return (
          <div className="flex justify-between border-b border-gray-300 py-8">
            <div className="text-start">
              <p>{item?.age}</p>
              <p className="text-gray-400 text-xs">{item?.ref}</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center border border-gray-400 rounded-full h-[30px] w-[30px]">
                <BiMinus />
              </div>
              <span className="mx-2">0</span>
              <div className="flex items-center justify-center border border-gray-400 rounded-full h-[30px] w-[30px]">
                <BiPlus />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhoMenue;
