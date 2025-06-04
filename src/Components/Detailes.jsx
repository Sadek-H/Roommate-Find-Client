import React, { use, useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { MdBedroomChild, MdEventAvailable } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import Loader from "./Loader";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AuthContext } from "../Firebase/Authcontext";

const Detailes = () => {
  let { user } = use(AuthContext);
  const [matedata, setmateData] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  let [contacts, setContacts] = useState();
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const found = data.find((singledata) => singledata._id === id);
    setmateData(found);
  }, [data, id]);

  if (!matedata)
    return (
      <div className="text-center text-xl mt-20">
        <Loader />
      </div>
    );

  const {
    availability,
    location,
    rent,
    roomType,
    title,
    contact,
    description,
    email,
    lifestyle,
    name,
  } = matedata;

  const handleLike = () => {
    if (user?.email == email) {
      return;
    }
    setLikeCount((prev) => prev + 1);
    setContacts(contact);
  };

  return (
    <div className="container mx-auto px-4">
      {likeCount > 0 && (
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm animate-fade-in">
            <BiSolidLike className="text-pink-600 text-lg" />
            {likeCount} people interested in
          </div>
        </div>
      )}

      <div className="flex justify-center py-2">
        <h2 className="text-4xl font-extrabold text-indigo-600 underline text-center">
          All Details
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 mt-5 transition-all duration-300">
        <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4">
          <h2 className="text-3xl font-extrabold text-indigo-600 poppins text-center sm:text-left">
            {title}
          </h2>

          <button className="flex flex-col items-center gap-2 px-4 py-2 rounded-xl transition">
            <div className="bg-blue-600 rounded-3xl p-3 hover:bg-blue-800">
              <BiSolidLike onClick={handleLike} className="text-white" />
            </div>
            {contacts && (
              <div className="flex items-center gap-1 mt-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-xl text-sm font-medium shadow-inner animate-fade-in">
                <BsFillTelephoneFill /> {contact}
              </div>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <CiLocationOn className="text-xl text-red-700" />
            <span className="font-medium">Location:</span> {location}
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaRegMoneyBillAlt className="text-lg text-green-600" />
            <span className="font-medium">Rent:</span> ${rent}/month
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MdBedroomChild className="text-xl text-purple-700" />
            <span className="font-medium">Room Type:</span> {roomType}
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MdEventAvailable className="text-xl text-blue-700" />
            <span className="font-medium">Availability:</span> {availability}
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl shadow-inner mb-6">
          <h3 className="font-semibold text-lg mb-2 text-indigo-700">
            Lifestyle
          </h3>
          <p className="text-gray-600">{lifestyle}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2 text-indigo-700">
            Description
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        <div className="bg-indigo-50 p-5 rounded-xl shadow-inner mb-6">
          <h3 className="font-semibold text-lg mb-2 text-indigo-700">
            Contact Info
          </h3>
          <p className="text-gray-800">
            <span className="font-medium">Phone:</span> {contact}
          </p>
          <p className="text-gray-800">
            <span className="font-medium">Email:</span> {email}
          </p>
        </div>

        <div className="border-t pt-4 mt-4 text-sm text-gray-600 flex flex-col sm:flex-row justify-between">
          <p>
            <span className="font-semibold">Posted by:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detailes;
