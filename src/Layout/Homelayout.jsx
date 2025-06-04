import { Outlet } from "react-router";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";

const Homelayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homelayout;
