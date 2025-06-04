import { Outlet } from "react-router";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import { Suspense } from "react";

const Homelayout = () => {
  return (
    <div>
      <Header />
     <Suspense fallback={<Loader></Loader>}>
         <Outlet />
     </Suspense>
      <Footer />
    </div>
  );
};

export default Homelayout;
