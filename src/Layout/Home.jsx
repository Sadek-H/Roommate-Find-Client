import React from "react";
import Banner from "../Components/Banner";
import Featuredmates from "../Components/Featuredmates";


import TheStories from "../Components/TheStories";
import Tips from "../Components/Tips";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featuredmates></Featuredmates>
      <Tips></Tips>
      <TheStories></TheStories>
    </div>
  );
};

export default Home;
