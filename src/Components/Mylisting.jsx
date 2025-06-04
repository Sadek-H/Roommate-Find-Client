import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Firebase/Authcontext";
import Update from "./Update";
import Swal from "sweetalert2";
import Loader from "./Loader";

const Mylisting = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = data.filter((item) => item.email === user?.email);
    setMyListings(filtered);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [data, user?.email]);

  let handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (res) => {
      if (res.isConfirmed) {
        await fetch(`https://roommate-finder-server-flax.vercel.app/roommates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.deletedCount) {
              const updatedListings = myListings.filter(
                (listing) => listing._id !== id
              );
              setMyListings(updatedListings);

              Swal.fire({
                title: "Your Item has been deleted",
                icon: "success",
                draggable: true,
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10 underline underline-offset-8">
        My Listings
      </h2>
      {loading ? (
        <div className="flex justify-center items-center py-4">
          <Loader />
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-2xl rounded-3xl">
          <table className="min-w-full divide-y divide-gray-200 text-sm whitespace-nowrap">
            <thead className="bg-indigo-50 text-indigo-800 text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Location</th>
                <th className="px-6 py-4 text-left">Rent</th>
                <th className="px-6 py-4 text-left">Availability</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {myListings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">
                    No listings found.
                  </td>
                </tr>
              ) : (
                myListings.map((listing) => (
                  <tr key={listing._id} className="hover:bg-indigo-50 transition">
                    <td className="px-6 py-4 font-semibold text-indigo-700">
                      {listing.title}
                    </td>
                    <td className="px-6 py-4">{listing.location}</td>
                    <td className="px-6 py-4">${listing.rent}</td>
                    <td className="px-6 py-4">{listing.availability}</td>
                    <td className="px-6 py-4 text-center space-x-2">
                      {/* Modal Trigger */}
                      <button
                        className="btn btn-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md inline-flex items-center gap-1"
                        onClick={() =>
                          document
                            .getElementById(`update-modal-${listing._id}`)
                            .showModal()
                        }
                      >
                        Update
                      </button>

                      {/* Update Modal */}
                      <dialog
                        id={`update-modal-${listing._id}`}
                        className="modal"
                      >
                        <div className="modal-box w-11/12 max-w-2xl rounded-xl">
                         <Update listing={listing}  />
                          <div className="modal-action">
                            <form method="dialog"></form>
                          </div>
                        </div>
                      </dialog>

                      <button
                        onClick={() => handledelete(listing._id)}
                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md inline-flex items-center gap-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Mylisting;