import React from "react";
import "./CarCard.css";
import { FiUsers } from "react-icons/fi";
import { FaCarAlt, FaGasPump } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { BsHeart } from "react-icons/bs";

const CarCard = ({ car }) => {
  // console.log(car)
    return (
      <div className="bg-[#f0f8ff] p-2 shadow-md rounded-xl m-2">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-60 object-cover rounded-xl"
        />
        <div className="px-3 pt-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{car.name}</h2>
            {/* JSX */}
            <p className="rounded-dashed-border">{car.year}</p>
          </div>
          <div className="grid grid-cols-2 justify-between items-center mb-4">
              <div className="flex items-center">
                  <FiUsers className="me-2 font-icon text-lg font-semibold"/>
                  <p className="text-lg font-semibold">{car.people} people</p>
              </div>
              <div className="flex items-center">
                  <FaGasPump className="me-2 font-icon text-lg font-semibold"/>
                  <p className="text-lg font-semibold">{car.gas}</p>
              </div>
          </div>
          <div className="grid grid-cols-2 justify-between items-center mb-4">
              <div className="flex items-center">
                  <MdLocationCity className="me-2 font-icon text-lg font-semibold"/>
                  <p className="text-lg font-semibold">{car.mileage}</p>
              </div>
              <div className="flex items-center">
                  <FaCarAlt className="me-2 font-icon text-lg font-semibold"/>
                  <p className="text-lg font-semibold">{car.display}</p>
              </div>
          </div>
          <div className="border-t border-gray-300 my-5"></div>
          <div className="flex justify-between items-center mt-4 mb-3">
              <div>
                <h5>
                  <span className="text-2xl font-semibold">${car.amount}</span> /month
                </h5>
              </div>
              <div className="flex justify-between items-center">
              <div className="heart-icon me-4">
                <BsHeart className="heart" />
              </div>
              <div>
                <button className="read-more rounded-lg px-4 py-3 font-medium text-lg">Rent Now</button>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  };
  

export default CarCard;
