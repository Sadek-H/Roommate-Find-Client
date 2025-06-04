import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import Home from "../Layout/Home";
import FindRoommates from "../Components/FindRoommates";
import Featuredmates from "../Components/Featuredmates";
import Detailes from "../Components/Detailes";
import BrowseListing from "../Components/Browselisting";
import Mylisting from "../Components/Mylisting";
import Loader from "../Components/Loader";
import Notfound from "../Notfound";
import Privateroutes from "./Privateroutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homelayout,
    errorElement: <Notfound></Notfound>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/findroommates",
        element: (
          <Privateroutes>
            <FindRoommates></FindRoommates>
          </Privateroutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Privateroutes>
            <Detailes></Detailes>
          </Privateroutes>
        ),
        loader: () =>
          fetch("https://roommate-finder-server-flax.vercel.app/roommates"),
      },
      {
        path: "browselisting",
        Component: BrowseListing,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "mylisting",
        element: (
          <Privateroutes>
            <Mylisting></Mylisting>
          </Privateroutes>
        ),
        loader: () =>
          fetch("https://roommate-finder-server-flax.vercel.app/roommates"),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  //for all undifined routes
  {
    path: "*",
    Component: Notfound,
  },
]);
export default router;
