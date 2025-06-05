import React from "react";
import { FaUserFriends } from "react-icons/fa";
import {
  FaBed,
  FaBroom,
  FaComments,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa6";

const Tips = () => {
  return (
    <section className="container mx-auto bg-indigo-50 py-12 px-4 rounded-3xl shadow-lg my-10">
      <div>
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Tips for Finding the Perfect Roommate
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHandshake />,
              text: "Set clear expectations from day one",
            },
            {
              icon: <FaBroom />,
              text: "Agree on cleanliness and chore-sharing",
            },
            {
              icon: <FaMoneyBillWave />,
              text: "Discuss budgets and bill-splitting early",
            },
            {
              icon: <FaUserFriends />,
              text: "Match your social and guest preferences",
            },
            { icon: <FaBed />, text: "Ensure aligned sleep/wake schedules" },
            {
              icon: <FaComments />,
              text: "Maintain honest and open communication",
            },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:bg-indigo-100 transition"
            >
              <div className="text-indigo-600 text-3xl">{tip.icon}</div>
              <p className="text-gray-700 font-medium">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
