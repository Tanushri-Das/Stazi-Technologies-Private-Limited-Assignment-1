// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentPage } from "../../redux/actions";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// const Pagination = ({ displayedCars }) => {
//   console.log("cars", displayedCars.length);
//   const dispatch = useDispatch();
//   const currentPage = useSelector((state) => state.currentPage);
//   const totalPageCount = 10;
//   const navigate = useNavigate();
//   const { page } = useParams();

//   useEffect(() => {
//     // Log the current URL and active page number when the component mounts
//     console.log("Current URL:", window.location.href);
//     console.log("Active Page Number:", currentPage);
//   }, [currentPage]);

//   const handlePageChange = (newPage) => {
//     dispatch(setCurrentPage(newPage));
//     navigate(`/page/${newPage}`);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     const totalPages = totalPageCount;
//     const maxVisiblePages = 5;

//     if (totalPages <= maxVisiblePages) {
//       // If there are fewer pages than maxVisiblePages, render all pages.
//       for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i);
//       }
//     } else {
//       // If there are more pages than maxVisiblePages, render a subset.
//       if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
//         // If the current page is near the beginning, render pages 1 to maxVisiblePages.
//         for (let i = 1; i <= maxVisiblePages; i++) {
//           pageNumbers.push(i);
//         }
//         pageNumbers.push("...");
//         pageNumbers.push(totalPages);
//       } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
//         // If the current page is near the end, render the last maxVisiblePages pages.
//         pageNumbers.push(1);
//         pageNumbers.push("...");
//         for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
//           pageNumbers.push(i);
//         }
//       } else {
//         // If the current page is in the middle, render pages around the current page.
//         pageNumbers.push(1);
//         pageNumbers.push("...");
//         for (
//           let i = currentPage - Math.floor(maxVisiblePages / 2);
//           i <= currentPage + Math.floor(maxVisiblePages / 2);
//           i++
//         ) {
//           pageNumbers.push(i);
//         }
//         pageNumbers.push("...");
//         pageNumbers.push(totalPages);
//       }
//     }

//     return pageNumbers.map((pageNumber, index) => (
//       <button
//         key={index}
//         onClick={() => handlePageChange(pageNumber)}
//         className={`px-4 py-2 mr-2 rounded-lg text-lg font-medium ${
//           currentPage === pageNumber ? "bg-white text-black" : "bg-gray-200"
//         }`}
//         disabled={pageNumber === "..." || currentPage === pageNumber}
//       >
//         {pageNumber}
//       </button>
//     ));
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center shadow-gray-300 shadow-2xl rounded-xl px-4 py-4">
//       <div>
//       {displayedCars.length === 0 ? (
//     <p className="text-lg font-medium">Car data is empty</p>
//   ) : (
//     <p className="text-lg font-medium">
//       {displayedCars.length} from 40
//     </p>
//   )}
//       </div>
//       <div className="flex ">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 mr-2 rounded-lg bg-white text-black"
//         >
//           <BsArrowLeft className="font-bold text-xl" />
//         </button>
//         {renderPageNumbers()}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPageCount}
//           className="px-4 py-2 ml-2 rounded-lg bg-white text-black"
//         >
//           <BsArrowRight className="font-bold text-xl" />
//         </button>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default Pagination;

/** */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({filteredCars}) => {

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPageCount = 10;
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    // Log the current URL and active page number when the component mounts
    console.log("Current URL:", window.location.href);
    console.log("Active Page Number:", currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
    navigate(`/page/${newPage}`);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = totalPageCount;
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // If there are fewer pages than maxVisiblePages, render all pages.
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If there are more pages than maxVisiblePages, render a subset.
      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        // If the current page is near the beginning, render pages 1 to maxVisiblePages.
        for (let i = 1; i <= maxVisiblePages; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
        // If the current page is near the end, render the last maxVisiblePages pages.
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // If the current page is in the middle, render pages around the current page.
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (
          let i = currentPage - Math.floor(maxVisiblePages / 2);
          i <= currentPage + Math.floor(maxVisiblePages / 2);
          i++
        ) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((pageNumber, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(pageNumber)}
        className={`px-4 py-2 mr-2 rounded-lg text-lg font-medium ${
          currentPage === pageNumber ? "bg-white text-black" : "bg-gray-200"
        }`}
        disabled={pageNumber === "..." || currentPage === pageNumber}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center shadow-gray-300 shadow-2xl rounded-xl px-4 py-4">
        {/* <div>
        <p className="text-lg font-medium">
              {displayedCars.length} from 40
            </p>
        </div> */}
        <div className="flex ">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mr-2 rounded-lg bg-white text-black"
          >
            <BsArrowLeft className="font-bold text-xl" />
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPageCount}
            className="px-4 py-2 ml-2 rounded-lg bg-white text-black"
          >
            <BsArrowRight className="font-bold text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

