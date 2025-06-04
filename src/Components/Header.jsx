import { Link, NavLink } from "react-router";
import { AuthContext } from "../Firebase/Authcontext";
import { useContext, useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import ThemeControl from "../Theme/ThemeControl";

const Header = () => {
  const { user, signoutuser } = useContext(AuthContext);
  const [userinfo, setUserinfo] = useState();
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    setUserinfo(user);
  }, [user]);

  const handlesignOut = () => {
    signoutuser();
  };
  let handleBar = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      <div className="container mx-auto navbar bg-black shadow-sm">
        <div className="w-full px-1 flex justify-between lg:justify-start">
          <button
            onClick={handleBar}
            className="lg:hidden btn btn-square btn-ghost text-white hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </button>
          <div className="-px-3 lg:px-3 flex justify-between items-center  text-white text-2xl italic font-bold poppins">
            <img className="w-6 h-6" src="assets/key.png" alt="" />{" "}
            <span className="text-orange-500">Your</span>Mate
          </div>
        </div>

        <div className="hidden navbar-center lg:flex  gap-3 px-3">
          <NavLink to="/" className="text-white font-medium poppins">
            Home
          </NavLink>
          <NavLink
            to="/findroommates"
            className="text-white font-medium poppins"
          >
            Find Roommates
          </NavLink>
          <NavLink
            to="/browselisting"
            className="text-white font-medium poppins"
          >
            Browse Listing
          </NavLink>
          <NavLink to="/mylisting" className="text-white font-medium poppins">
            My Listings
          </NavLink>

          {userinfo ? (
            <div className="flex items-center gap-2">
              {userinfo?.photoURL && (
                <>
                  <img
                    className="bg-amber-300 rounded-full w-8 h-8 cursor-pointer"
                    src={userinfo.photoURL}
                    alt="User"
                    data-tooltip-id="user-tooltip"
                  />
                  <ReactTooltip
                    id="user-tooltip"
                    place="bottom"
                    clickable
                    className="z-50 mt-1 p-8 max-w-[200px] text-center rounded-xl bg-gray-800 text-white shadow-xl"
                    content={
                      <div>
                        <p className="font-semibold text-lg mb-3 text-orange-400 poppins">
                          {userinfo?.displayName || "User"}
                        </p>
                        <button
                          onClick={handlesignOut}
                          className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm transition duration-200"
                        >
                          Sign Out
                        </button>
                      </div>
                    }
                  />
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center  gap-2">
              <NavLink to="/login" className="text-white font-medium poppins">
              Login
            </NavLink>
              <NavLink to="/register" className="text-white font-medium poppins">
              SignUp
            </NavLink>
            </div>
          )}
        </div>
        <div className="px-2">
          <ThemeControl></ThemeControl>
        </div>
      </div>
      {openNav && (
        <div className="container mx-auto lg:hidden p-1 flex flex-col gap-3 px-6 pb-4 py-2 bg-gray-700">
          <div className="w-max flex flex-col  items-start gap-4">
            <NavLink to="/" className="text-white font-medium poppins">
              Home
            </NavLink>
            <NavLink
              to="/findroommates"
              className="text-white font-medium poppins"
            >
              Find Roommates
            </NavLink>
            <NavLink
              to="/browselisting"
              className="text-white font-medium poppins"
            >
              Browse Listing
            </NavLink>
            <NavLink to="/mylisting" className="text-white font-medium poppins">
              My Listings
            </NavLink>
          </div>

          {userinfo ? (
            <div className="flex items-center gap-2">
              {userinfo?.photoURL && (
                <>
                  <img
                    className="bg-amber-300 rounded-full w-8 h-8 cursor-pointer"
                    src={userinfo.photoURL}
                    alt="User"
                    data-tooltip-id="user-tooltip"
                  />
                  <ReactTooltip
                    id="user-tooltip"
                    place="bottom"
                    clickable
                    className="z-50 mt-2 px-2 p-8 max-w-[200px] text-center rounded-xl bg-gray-800 text-white shadow-xl"
                    content={
                      <div>
                        <p className="font-semibold text-lg mb-3 text-orange-400 poppins">
                          {userinfo?.displayName || "User"}
                        </p>
                        <button
                          onClick={handlesignOut}
                          className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm transition duration-200"
                        >
                          Sign Out
                        </button>
                      </div>
                    }
                  />
                </>
              )}
            </div>
          ) : (
           <div className="w-max flex flex-col gap-2">
             <NavLink to="/login" className=" text-white font-medium poppins">
              Login
            </NavLink> 
            <NavLink to="/register" className="text-white font-medium poppins">
              SignUp
            </NavLink>
           </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
