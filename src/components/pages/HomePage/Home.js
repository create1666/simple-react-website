import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObject1, homeObject2, homeObject3 } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObject1} />
      <HeroSection {...homeObject2} />
      <Pricing/>
      <HeroSection {...homeObject3} />
    </>
  );
}

export default Home;
