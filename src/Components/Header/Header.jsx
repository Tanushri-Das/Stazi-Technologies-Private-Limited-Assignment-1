
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineSearch } from "react-icons/ai";
import { setSearchFilter } from "../../redux/actions/actions";

const Header = () => {
  const searchFilter = useSelector((state) => state.searchFilter);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const newValue = e.target.value;
    dispatch(setSearchFilter(newValue));
    console.log("Search Filter Value:", newValue); 
  };

  return (
    <div className="px-6 pt-2">
      <header className="pagination-div-box-shadow rounded-xl p-5 bg-[#f0f8ff]">
        <div className="relative bg-white w-1/2 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full w-full hover:outline-none focus:outline-none"
            value={searchFilter}
            onChange={handleSearch}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-500">
            <AiOutlineSearch />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
