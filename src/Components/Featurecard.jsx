import React from 'react';
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { MdBedroomChild } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
const Featurecard = ({singlemate}) => {
    // console.log(singlemate);
    //contact,description,email,lifestyle,name,
    let {_id,availability,location,rent,roomType,title} = singlemate;
    return (
         <div className="rounded-2xl shadow-md overflow-hidden bg-white">
     
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-indigo-700 poppins">{title}</h3>
       <div className='flex items-center gap-1'> <CiLocationOn className='text-red-900 font-semibold'/> <p className="text-sm text-gray-600 poppins"> {location}</p></div>
       <div className='flex items-center gap-1'><FaRegMoneyBillAlt /> <p className="text-sm text-gray-600 poppins">Rent: ${rent}/month</p></div>
       <div className='flex items-center gap-1'> <MdBedroomChild /><p className="text-sm text-gray-600 poppins"> Room: {roomType}</p></div>
       <div className='flex items-center gap-1'> <MdEventAvailable /><p className="text-sm text-gray-600 poppins">Availability: {availability}</p></div>
        <Link to={`/details/${_id}`}>
          <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            See More
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Featurecard;