import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/Authcontext";
import { FaUsersViewfinder } from "react-icons/fa6";
import Swal from "sweetalert2";
import { FaSearchPlus } from "react-icons/fa";

const Update = ({ listing, setMyListings }) => {
  const { user } = useContext(AuthContext);
  const [updatemate, setupdateMate] = useState(listing || {});

  useEffect(() => {
    setupdateMate(listing);
  }, [listing]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    let formdata = new FormData(form);
    let updateformdata = Object.fromEntries(formdata.entries());

    fetch(
      `https://roommate-finder-server-flax.vercel.app/roommates/${updatemate._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateformdata),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setMyListings((prevListings) =>
            prevListings.map((item) =>
              item._id === listing._id ? { ...item, ...updateformdata } : item
            )
          );

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        document.getElementById(`update-modal-${listing._id}`).close();
      });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white  rounded-xl p-6 sm:p-8">
        <div className="flex justify-center items-center gap-2 mb-6 text-center">
          <FaUsersViewfinder className="text-4xl text-indigo-600" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Update Roommate
          </h2>
        </div>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600">
              Title
            </label>
            <input
              name="title"
              placeholder="Looking for a roommate in NYC"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Location
            </label>
            <input
              name="location"
              placeholder="Brooklyn, NYC"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          {/* Rent */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Rent Amount ($)
            </label>
            <input
              name="rent"
              type="number"
              placeholder="e.g. 800"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Room Type
            </label>
            <select
              name="roomType"
              className="select select-bordered w-full mt-1"
              required
            >
              <option value="">Choose</option>
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
              <option value="Studio">Studio</option>
            </select>
          </div>

          {/* Lifestyle */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Lifestyle Preferences
            </label>
            <input
              name="lifestyle"
              placeholder="e.g., No Pets, Non-Smoker"
              className="input input-bordered w-full mt-1"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Availability
            </label>
            <select
              name="availability"
              className="select select-bordered w-full mt-1"
              required
            >
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe your place, roommate preference, etc."
              className="textarea textarea-bordered w-full mt-1"
            ></textarea>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Contact Info
            </label>
            <input
              name="contact"
              placeholder="Phone / Messenger / Email"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          {/* Email (read-only) */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Your Email
            </label>
            <input
              readOnly
              value={user?.email || ""}
              name="email"
              className="input input-bordered w-full mt-1 bg-gray-100"
            />
          </div>

          {/* Name (read-only) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600">
              Your Name
            </label>
            <input
              readOnly
              value={user?.displayName || ""}
              name="name"
              className="input input-bordered w-full mt-1 bg-gray-100"
            />
          </div>
          <div className="flex justify-center items-center md:col-span-2 gap-2">
            <button
              type="submit"
              className="text-center btn btn-primary   btn-wide text-white text-lg poppins  shadow-md hover:scale-105 duration-200"
            >
              <FaSearchPlus /> Update
            </button>
            <form method="dialog">
              <button className="text-center btn btn-secondary   btn-wide text-white text-lg poppins  shadow-md hover:scale-105 duration-200">
                Close
              </button>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
