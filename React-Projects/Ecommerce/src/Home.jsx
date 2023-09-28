import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";
import ProductList from "./components/ProductList";

const Home = () => {
  const data = {
    name: "Rathod store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <ProductList />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
};

export default Home;