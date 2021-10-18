import React, { Fragment } from "react";
import "../../index.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </Fragment>
  );
};
export default Home;
