import React from "react";
import img from "../assets/map.png";
const WhereMenue = () => {
  const list = [
    { name: "I’m flexible" },
    { name: "Europe" },
    { name: "United Kingdom" },
    { name: "Middle East" },
    { name: "Turkey" },
    { name: "United States" },
  ];
  return (
    <div>
      <div
        className="flex flex-col justify-center p-7 shadow-md border border-gray-300 rounded-lg bg-white w-[400px] border-b"
        style={{ borderRadius: "30px" }}
      >
        <p className="my-2 text-start">Search by region</p>
        <div className="flex flex-wrap gap-4 justify-center ">
          {list.map((item, index) => {
            return (
              <div key={index} className="mt-2">
                <img
                  src={img}
                  alt={"map & region"}
                  className="rounded shadow-md h-[90px] w-[90px]"
                />
                <p className="text-xs text-start text-gray-400 mt-2">
                  {item?.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhereMenue;
