import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Navbar from "./../components/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
