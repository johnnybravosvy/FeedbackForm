import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Feedback Collection Page</h1>
          <p className="home-description">
            THis is where Students and Staff come to express either their
            pleasure or displeasure with the services been rendered to them on
            daily basis
          </p>
        </div>
        <div className="home-image"></div>
      </div>
    </>
  );
};

export default Home;
