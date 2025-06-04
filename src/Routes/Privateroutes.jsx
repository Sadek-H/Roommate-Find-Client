import React, { use } from "react";
import { AuthContext } from "../Firebase/Authcontext";
import { Navigate } from "react-router";
import Loader from "../Components/Loader";

const Privateroutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  
  if (loading) {
    return <Loader />;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default Privateroutes;
