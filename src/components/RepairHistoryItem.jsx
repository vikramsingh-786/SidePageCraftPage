import React from "react";

const RepairHistoryItem = ({ item }) => {
  return (
    <div className="flex flex-row items-start p-2 gap-2 w-[297px] h-[116px] bg-gradient-to-b from-transparent to-[#12162480] rounded-md">
      {/* Image container */}
      <div className="flex justify-center items-center w-[100px] h-[100px] bg-gradient-to-br from-white/40 to-transparent rounded-[20px]">
        <img
          src={item.image}
          alt={item.name}
          className="w-[75px] h-[75px] object-contain"
        />
      </div>

      {/* Text Info */}
      <div className="flex flex-col justify-center items-start p-2 gap-2 w-[173px] h-[61px] rounded-md">
        <span className="text-white font-inter font-semibold text-[16px] leading-[21px] tracking-[-0.31px]">
          {item.name}
        </span>
        <span className="text-white opacity-60 font-inter font-normal text-[13px] leading-[16px]">
          {item.date}
        </span>
      </div>
    </div>
  );
};

export default RepairHistoryItem;
