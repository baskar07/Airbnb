import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="border-[1px]  w-full md:w-auto py-1 rounded-full shadow-sm hover:shadow-md transition  cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6 ">AnyWhere</div>
        <div className="hidden sm:block  px-6 border-x-[1px] flex-1 text-center text-sm font-semibold ">
          AnyWeek
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">AddGuests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
