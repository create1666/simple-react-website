import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObject1} from "./Data"

function Home() {
  return (
    <>
      <HeroSection {...homeObject1}/>
    </>
  )
}

export default Home
