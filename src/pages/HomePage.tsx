import React from "react";

import Header from "../components/Header";
import Hero from "../components/Homepage/Hero";
const HomePage = () => {
  return (
    <div className="bg-container-light">
      <div className="container m-auto">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
