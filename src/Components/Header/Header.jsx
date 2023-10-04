// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setSearchFilter } from "../../redux/actions";
// import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon

// const Header = () => {
//   const searchFilter = useSelector((state) => state.searchFilter);
//   const dispatch = useDispatch();

//   const handleSearch = (e) => {
//     const newValue = e.target.value;
//     dispatch(setSearchFilter(newValue));
//     console.log("Search Filter Value:", newValue); // Log the value in the console
//   };

//   return (
//     <div className="px-6">
//       <header
//         className="shadow-xl rounded-xl p-5"
//         style={{ backgroundColor: "#f0f8ff" }}
//       >
//         <div className="relative bg-white w-1/2 rounded-xl flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 rounded-lg w-full hover:outline-none focus:outline-none"
//             value={searchFilter}
//             onChange={handleSearch}
//           />
//           <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
//             <AiOutlineSearch />
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;



/** */

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setSearchFilter } from "../../redux/actions";
// import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon

// const Header = () => {
//   const searchFilter = useSelector((state) => state.searchFilter);
//   const dispatch = useDispatch();

//   const handleSearch = (e) => {
//     const newValue = e.target.value;
//     dispatch(setSearchFilter(newValue));
//     console.log("Search Filter Value:", newValue); // Log the value in the console
//   };

//   return (
//     <div className="px-6">
//       <header
//         className="shadow-xl rounded-xl p-5"
//         style={{ backgroundColor: "#f0f8ff" }}
//       >
//         <div className="relative bg-white w-1/2 rounded-xl flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 rounded-lg w-full hover:outline-none focus:outline-none"
//             value={searchFilter}
//             onChange={handleSearch}
//           />
//           <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
//             <AiOutlineSearch />
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchFilter } from "../../redux/actions";
import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon

const Header = () => {
  const searchFilter = useSelector((state) => state.searchFilter);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const newValue = e.target.value;
    dispatch(setSearchFilter(newValue));
    console.log("Search Filter Value:", newValue); // Log the value in the console
  };

  return (
    <div className="px-6">
      <header
        className="shadow-xl rounded-xl p-5"
        style={{ backgroundColor: "#f0f8ff" }}
      >
        <div className="relative bg-white w-1/2 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg w-full hover:outline-none focus:outline-none"
            value={searchFilter}
            onChange={handleSearch}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
            <AiOutlineSearch />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
