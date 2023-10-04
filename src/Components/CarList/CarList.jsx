// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import CarCard from "../CarCard/CarCard";
// import Pagination from "../Pagination/Pagination";
// import { useParams } from "react-router-dom";

// const CarList = () => {
//   const { page } = useParams(); // Get the page parameter from the URL
//   const cars = useSelector((state) => state.cars);
//   const searchFilter = useSelector((state) => state.searchFilter);
//   const currentPage = parseInt(page || 1, 10);

//   // Make the search filter case-insensitive
//   const lowercaseSearchFilter = searchFilter.toLowerCase();

//   useEffect(() => {
//     // Log the current URL and active page number when the component mounts
//     console.log("Current URL:", window.location.href);
//     console.log("Active Page Number:", currentPage);
//   }, [currentPage]);

//   // Filter the cars and make the comparison case-insensitive
//   const filteredCars = cars.filter((car) =>
//     car.name.toLowerCase().includes(lowercaseSearchFilter)
//   );

//   const carsPerPage = 6;
//   const startIndex = (currentPage - 1) * carsPerPage;
//   const endIndex = startIndex + carsPerPage;
//   const displayedCars = filteredCars.slice(startIndex, endIndex);

//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-4 p-4">
//         {displayedCars.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}
//       </div>
//       <Pagination/>
//     </div>
//   );
// };

// export default CarList;

/** */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router-dom";
import { setSearchFilter } from "../../redux/actions";

const CarList = () => {
  const { page } = useParams();
  const searchFilter = useSelector((state) => state.searchFilter);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const newValue = e.target.value;
    dispatch(setSearchFilter(newValue));
    console.log("Search Filter Value:", newValue); // Log the value in the console
  };
  const cars = useSelector((state) => state.cars);
  const currentPage = parseInt(page || 1, 10);
  const carsPerPage = 6;

  const lowercaseSearchFilter = searchFilter.toLowerCase();
  console.log(lowercaseSearchFilter);

  useEffect(() => {
    console.log("Current URL:", window.location.href);
    console.log("Active Page Number:", currentPage);
  }, [currentPage]);

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(lowercaseSearchFilter)
  );

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const displayedCars = filteredCars.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {displayedCars.length === 0 ? (
          <p className="text-lg font-medium">
            No cars found for "{searchFilter}"
          </p>
        ) : (
          displayedCars.map((car) => <CarCard key={car.id} car={car} />)
        )}
      </div>
      <Pagination displayedCars={filteredCars} />
    </div>
  );
};

export default CarList;
