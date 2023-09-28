import React,{useContext} from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/productcontext";

const About = () => {
  const{myname}=useContext(AppContext)
  const data = {
    name: "Rathod Ecommerce",
  };

  return (
    <>
    {myname}
      <HeroSection myData={data} />
    </>
  )
};

export default About;