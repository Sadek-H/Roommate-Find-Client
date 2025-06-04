import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { CiLocationOn } from 'react-icons/ci';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdBedroomParent, MdEventAvailable } from 'react-icons/md';
import Loader from './Loader';

const BrowseListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://roommate-finder-server-flax.vercel.app/roommates')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center poppins text-indigo-700 mb-10 underline">
        Browse Roommate Listings
      </h1>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <Loader />
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-2xl rounded-3xl ring-indigo-200">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-indigo-100 text-indigo-800 uppercase text-xs font-bold tracking-wide">
              <tr>
                <th className="px-6 py-5 poppins">Title</th>
                <th className="px-6 py-5 flex items-center gap-2 poppins"><CiLocationOn className="inline" />Location</th>
                <th className="px-6 py-5 poppins"><FaMoneyBillWave className="inline mr-1" />Rent</th>
                <th className="px-6 py-5 poppins"><MdBedroomParent className="inline mr-1" />Room Type</th>
                <th className="px-6 py-5 poppins"><MdEventAvailable className="inline mr-1" />Available</th>
                <th className="px-6 py-5 text-center poppins">Action</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((singlelist) => (
                <tr
                  key={singlelist._id}
                  className="transition duration-300 hover:bg-indigo-100"
                >
                  <td className="px-6 py-4 font-semibold text-indigo-700 poppins">{singlelist.title}</td>
                  <td className="px-6 py-4 poppins">{singlelist.location}</td>
                  <td className="px-6 py-4 poppins">${singlelist.rent}</td>
                  <td className="px-6 py-4 poppins">{singlelist.roomType}</td>
                  <td className="px-6 py-4 poppins">{singlelist.availability}</td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      to={`/details/${singlelist._id}`}
                      className="inline-block px-5 py-2 poppins bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition duration-300"
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BrowseListing;