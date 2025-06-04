import React, { use } from 'react';
import { FaListUl, FaSearchPlus } from "react-icons/fa";
import { AuthContext } from '../Firebase/Authcontext';
import Swal from 'sweetalert2';
const FindRoommates = () => {
    let {user} =use(AuthContext);
    let handlesubmit=(e)=>{
        e.preventDefault();
        let form = e.target;
        let formdata = new FormData(form);
        let alldata = Object.fromEntries(formdata.entries());
        console.log(alldata);
        fetch('http://localhost:3000/roommates',{
          method: "POST",
          headers:{ 
            "content-type": "application/json",
          },
          body: JSON.stringify(alldata)

        })
        .then((res)=> res.json())
        .then((data)=>{
          console.log('added',data);
        Swal.fire({
                  title: "Roommate Added",
                  icon: "success",
                  draggable: true,
                });
        })
    }
    return (
       <div className="container mx-auto min-h-screen bg-gradient-to-r from-orange-100 to-amber-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
       <div className='flex justify-center items-center gap-2'>
       <FaListUl />  <h2 className="text-4xl font-bold poppins  text-gray-800 ">Add Roommate Listing</h2>
       </div>

        <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm font-semibold text-gray-600 poppins">Title</label>
            <input
              name="title"
              placeholder="Looking for a roommate in NYC"
              className="input input-bordered w-full mt-1 poppins"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Location</label>
            <input name="location" placeholder="Brooklyn, NYC" className="input input-bordered poppins w-full mt-1" required />
          </div>

          {/* Rent */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Rent Amount ($)</label>
            <input name="rent" type="number" className="input input-bordered w-full mt-1 poppins" required />
          </div>

          {/* Room Type */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Room Type</label>
            <select name="roomType" className="select select-bordered w-full mt-1 poppins" required>
              <option value="">Choose</option>
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
              <option value="Studio">Studio</option>
            </select>
          </div>

          {/* Lifestyle */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Lifestyle Preferences</label>
            <input
              name="lifestyle"
              placeholder="e.g., No Pets, Non-Smoker"
              className="input input-bordered w-full mt-1 poppins"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Availability</label>
            <select name="availability" className="select select-bordered w-full mt-1 poppins" required>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm font-semibold text-gray-600 poppins">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe your place, roommate preference, etc."
              className="textarea textarea-bordered w-full mt-1 poppins"
            ></textarea>
          </div>

          {/* Contact Info */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Contact Info</label>
            <input name="contact" placeholder="Phone / Messenger / Email" className="input input-bordered w-full poppins mt-1" required />
          </div>

          {/* User Email (read-only) */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Your Email</label>
            <input readOnly value={user?.email || ""}  name="email" className="input input-bordered w-full mt-1 bg-gray-100 poppins" />
          </div>

          {/* User Name (read-only) */}
          <div>
            <label className="text-sm font-semibold text-gray-600 poppins">Your Name</label>
            <input readOnly value={user?.displayName || ""}  name="name" className="input input-bordered w-full mt-1 bg-gray-100 poppins" />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center mt-4 ">
           
            <button type="submit" className="btn btn-primary btn-wide text-white text-lg poppins tracking-wide shadow-md hover:scale-105 duration-200">
              <FaSearchPlus /> Add
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default FindRoommates;