import React from "react";
import HeroSection from "../../HeroSection";
import { homeObject1, homeObject2, homeObject3 } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObject1} />
      <HeroSection {...homeObject2} />
      <HeroSection {...homeObject3} />
    </>
  );
}

export default Home;
